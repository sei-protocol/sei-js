import { rpcUrlMap } from './chains.js';

const URL_PATTERN = /\bhttps?:\/\/[^\s"'<>[\]{}()]+/gi;
const REDACTED = '[redacted]';
const REDACTED_MESSAGE = 'Sensitive error details redacted.';
const MIN_SECRET_LENGTH = 6;
const PUBLIC_URLS = new Set(['https://evm-rpc.sei-apis.com', 'https://evm-rpc-testnet.sei-apis.com', 'https://docs.sei.io/mcp']);
const SENSITIVE_KEYS = new Set([
	'accesskey',
	'accesskeyid',
	'accesstoken',
	'apikey',
	'assertion',
	'awsaccesskeyid',
	'awscredentials',
	'authorization',
	'auth',
	'authtoken',
	'clientassertion',
	'clientcredentials',
	'clientsecret',
	'cookie',
	'credential',
	'credentials',
	'dpop',
	'dpopproof',
	'dbpassphrase',
	'idtoken',
	'jwt',
	'oauthaccesstoken',
	'password',
	'passwords',
	'passphrase',
	'privatekey',
	'proofofpossession',
	'proxyauthorization',
	'refreshtoken',
	'secret',
	'secrets',
	'sessioncookie',
	'setcookie',
	'webhookkey',
	'xapikey',
	'xauthorization',
	'xauthorizationheader',
	'xauthtoken',
	'xdpop',
	'xdpopproof',
	'xsessioncookie',
	'xsessionid'
]);
const STANDARD_AUTH_SCHEME_PATTERNS = [
	'api[\\s_-]*key',
	'aws4-hmac(?:-[a-z0-9]+)+(?:-payload)?',
	'basic',
	'bearer',
	'digest',
	'dpop',
	'gnap',
	'hoba',
	'mutual',
	'negotiate',
	'oauth',
	'scram(?:-[a-z0-9]+)+(?:-plus)?',
	'signature',
	'token',
	'vapid'
];
const POSSIBLE_FIELD_PATTERN = /(?:\\?["'])?([a-z][a-z0-9 _-]{0,80})(?:\\?["'])?\s*[:=]/gi;
const STANDARD_AUTHORIZATION_AT_START = new RegExp(`^\\s*(${STANDARD_AUTH_SCHEME_PATTERNS.join('|')})\\s+(.+)$`, 'i');
const PARAMETERIZED_AUTH_SCHEMES = new Set(['aws4hmac', 'digest', 'scram', 'signature']);
const TRAILING_DIAGNOSTIC_FIELD_PATTERN = /(?:[;,]\s*|\s+)(?=(?:nextfield|requestid|retry|status|trailingfield)\s*[:=])/i;

function addSecretVariants(secrets: Set<string>, value: string | undefined, minimumLength = MIN_SECRET_LENGTH): void {
	if (!value || value.length < minimumLength) return;

	secrets.add(value);
	try {
		secrets.add(decodeURIComponent(value));
	} catch {
		// The raw value is still redacted when it is not valid URI encoding.
	}
}

function configuredSecrets(): string[] {
	const secrets = new Set<string>();

	for (const configuredUrl of Object.values(rpcUrlMap ?? {})) {
		try {
			const url = new URL(configuredUrl);
			const candidates = [url.username, url.password, ...url.pathname.split('/'), ...url.searchParams.values()];

			for (const candidate of candidates) {
				addSecretVariants(secrets, candidate);
			}
		} catch {
			// Invalid configured URLs are reported by the RPC client; never echo them here.
			addSecretVariants(secrets, configuredUrl);
		}
	}

	const privateKey = process.env.PRIVATE_KEY;
	addSecretVariants(secrets, privateKey);
	if (privateKey) {
		addSecretVariants(secrets, privateKey.startsWith('0x') ? privateKey.slice(2) : `0x${privateKey}`);
	}
	addSecretVariants(secrets, process.env.WALLET_API_KEY);

	return [...secrets].sort((a, b) => b.length - a.length);
}

function normalizeKey(key: string): string {
	return key.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isSensitiveKey(key: string): boolean {
	const normalized = normalizeKey(key);
	return SENSITIVE_KEYS.has(normalized);
}

function isCredentialAuthorizationMatch(message: string): RegExpMatchArray | undefined {
	const match = message.match(STANDARD_AUTHORIZATION_AT_START);
	if (!match) return undefined;

	const scheme = normalizeKey(match[1] ?? '');
	const value = (match[2] ?? '').trim();
	if (!value) return undefined;

	if ([...PARAMETERIZED_AUTH_SCHEMES].some((candidate) => scheme.startsWith(candidate))) {
		return /(?:^|[,\s])(?:credential|data|keyid|nonce|response|signature|username)=[^\s,;]+/i.test(value) ? match : undefined;
	}

	const credential = value.split(/[\s,;]/, 1)[0] ?? '';
	if (scheme === 'basic' || scheme === 'negotiate') {
		return credential.length >= 12 && /^[a-z0-9+/_-]+={0,2}$/i.test(credential) && !/^[a-z]+$/i.test(credential) ? match : undefined;
	}

	return credential.length >= 12 && (!/^[a-z]+$/i.test(credential) || credential.length >= 24) ? match : undefined;
}

interface ValueRange {
	start: number;
	end: number;
}

function findCredentialValueRange(message: string, valueOffset: number): ValueRange | undefined {
	let start = valueOffset;
	while (/\s/.test(message[start] ?? '')) start++;
	if (message.startsWith('\\"', start) || message.startsWith("\\'", start)) return undefined;

	const quote = message[start];
	if (quote === '"' || quote === "'") {
		for (let index = start + 1; index < message.length; index++) {
			if (message[index] === '\\') {
				index++;
				continue;
			}
			if (message[index] === quote) return { start: start + 1, end: index };
		}
		return undefined;
	}

	const remaining = message.slice(start);
	const boundary = remaining.match(TRAILING_DIAGNOSTIC_FIELD_PATTERN);
	const end = boundary?.index === undefined ? message.length : start + boundary.index;
	return { start, end };
}

function applyRedactions(message: string, ranges: ValueRange[]): string {
	const merged: ValueRange[] = [];
	for (const range of ranges.sort((left, right) => left.start - right.start)) {
		const previous = merged.at(-1);
		if (previous && range.start <= previous.end) previous.end = Math.max(previous.end, range.end);
		else merged.push({ ...range });
	}

	let sanitized = message;
	for (const range of merged.reverse()) {
		sanitized = `${sanitized.slice(0, range.start)}${REDACTED}${sanitized.slice(range.end)}`;
	}
	return sanitized;
}

function redactCredentialText(message: string): string | null | undefined {
	const ranges: ValueRange[] = [];
	POSSIBLE_FIELD_PATTERN.lastIndex = 0;
	for (const field of message.matchAll(POSSIBLE_FIELD_PATTERN)) {
		if (!field[1] || !isSensitiveKey(field[1]) || field.index === undefined) continue;
		const valueOffset = field.index + field[0].length;
		const range = findCredentialValueRange(message, valueOffset);
		if (!range) return null;
		ranges.push(range);
	}
	if (ranges.length > 0) return applyRedactions(message, ranges);

	const authorization = isCredentialAuthorizationMatch(message);
	if (!authorization) return undefined;
	const value = authorization[2] ?? '';
	const valueOffset = message.indexOf(value, authorization.index ?? 0);
	const range = findCredentialValueRange(message, valueOffset);
	return range ? applyRedactions(message, [range]) : null;
}

function sanitizeUrl(rawUrl: string): string {
	try {
		const url = new URL(rawUrl);
		if (!url.username && !url.password && !url.search && !url.hash && PUBLIC_URLS.has(`${url.origin}${url.pathname.replace(/\/$/, '')}`)) {
			return rawUrl;
		}

		const path = url.pathname && url.pathname !== '/' ? '/[redacted]' : url.pathname;
		const query = url.search ? '?[redacted]' : '';
		const hash = url.hash ? '#[redacted]' : '';
		return `${url.origin}${path}${query}${hash}`;
	} catch {
		return '[redacted URL]';
	}
}

function redactConfiguredSecrets(message: string, secrets: string[]): string {
	let sanitized = message.replace(URL_PATTERN, sanitizeUrl);
	for (const secret of secrets) {
		sanitized = sanitized.split(secret).join(REDACTED);
	}
	return sanitized;
}

function redactJsonValue(value: unknown, secrets: string[]): unknown {
	if (typeof value === 'string') {
		const sanitized = redactConfiguredSecrets(value, secrets);
		const credentialSafe = redactCredentialText(sanitized);
		if (credentialSafe === null) return REDACTED_MESSAGE;
		return credentialSafe ?? sanitized;
	}
	if (Array.isArray(value)) return value.map((entry) => redactJsonValue(entry, secrets));
	if (!value || typeof value !== 'object') return value;

	return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, isSensitiveKey(key) ? REDACTED : redactJsonValue(entry, secrets)]));
}

function sanitizeJson(message: string, secrets: string[]): string | undefined {
	try {
		return JSON.stringify(redactJsonValue(JSON.parse(message), secrets));
	} catch {
		return undefined;
	}
}

/**
 * Converts an unknown upstream error to text safe for MCP responses and logs.
 * RPC URLs, credentials, paths, query values, and common secret fields are removed.
 */
export function sanitizeError(error: unknown): string {
	const rawMessage = error instanceof Error ? error.message : String(error);
	const secrets = configuredSecrets();
	const json = sanitizeJson(rawMessage, secrets);
	if (json !== undefined) return json;
	const sanitized = redactConfiguredSecrets(rawMessage, secrets);
	const credentialSafe = redactCredentialText(sanitized);
	if (credentialSafe === null) return REDACTED_MESSAGE;
	return credentialSafe ?? sanitized;
}
