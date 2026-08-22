import { rpcUrlMap } from './chains.js';

const URL_PATTERN = /\bhttps?:\/\/[^\s"'<>[\]{}()]+/gi;
const REDACTED = '[redacted]';
const REDACTED_MESSAGE = 'Sensitive error details redacted.';
const SENSITIVE_KEY_MARKERS = [
	'accesskey',
	'apikey',
	'assertion',
	'authorization',
	'authentication',
	'auth',
	'cookie',
	'credential',
	'dpop',
	'jwt',
	'password',
	'passwd',
	'passphrase',
	'privatekey',
	'proof',
	'secret',
	'session',
	'signature',
	'token',
	'webhookkey'
];
const STANDARD_AUTH_SCHEME_PATTERNS = [
	'api[\\s_-]*key',
	'aws',
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
const STANDARD_AUTHORIZATION_PATTERN = new RegExp(`\\b(?:${STANDARD_AUTH_SCHEME_PATTERNS.join('|')})\\s+(?=\\S)`, 'i');

function addSecretVariants(secrets: Set<string>, value: string | undefined, minimumLength = 1): void {
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
				addSecretVariants(secrets, candidate, 6);
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
	return SENSITIVE_KEY_MARKERS.some((marker) => normalized.includes(marker));
}

function containsSensitiveText(message: string): boolean {
	POSSIBLE_FIELD_PATTERN.lastIndex = 0;
	for (const field of message.matchAll(POSSIBLE_FIELD_PATTERN)) {
		if (field[1] && isSensitiveKey(field[1])) return true;
	}
	return STANDARD_AUTHORIZATION_PATTERN.test(message);
}

function redactConfiguredSecrets(message: string, secrets: string[]): string {
	let sanitized = message.replace(URL_PATTERN, '[redacted URL]');
	for (const secret of secrets) {
		sanitized = sanitized.split(secret).join(REDACTED);
	}
	return sanitized;
}

function redactJsonValue(value: unknown, secrets: string[]): unknown {
	if (typeof value === 'string') {
		const sanitized = redactConfiguredSecrets(value, secrets);
		if (containsSensitiveText(sanitized)) return REDACTED_MESSAGE;
		return sanitized;
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
	if (containsSensitiveText(sanitized)) return REDACTED_MESSAGE;
	return sanitized;
}
