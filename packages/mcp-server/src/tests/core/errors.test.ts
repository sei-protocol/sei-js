import { afterEach, describe, expect, it } from 'bun:test';
import { rpcUrlMap } from '../../core/chains.js';
import { sanitizeError } from '../../core/errors.js';

describe('sanitizeError', () => {
	const originalMainnetUrl = rpcUrlMap[1329];
	const originalPrivateKey = process.env.PRIVATE_KEY;
	const originalWalletApiKey = process.env.WALLET_API_KEY;

	afterEach(() => {
		rpcUrlMap[1329] = originalMainnetUrl;
		if (originalPrivateKey === undefined) delete process.env.PRIVATE_KEY;
		else process.env.PRIVATE_KEY = originalPrivateKey;
		if (originalWalletApiKey === undefined) delete process.env.WALLET_API_KEY;
		else process.env.WALLET_API_KEY = originalWalletApiKey;
	});

	it('preserves useful safe error details', () => {
		expect(sanitizeError(new Error('Execution reverted: insufficient balance'))).toBe('Execution reverted: insufficient balance');
		expect(sanitizeError('HTTP request failed with status 500')).toBe('HTTP request failed with status 500');
	});

	it('redacts URL credentials, paths, queries, and detached configured secrets', () => {
		const fakePathSecret = 'fake-path-secret';
		const fakeQuerySecret = 'fake-query-secret';
		const configuredUrl = new URL('https://rpc.example.test');
		configuredUrl.username = 'fake-user';
		configuredUrl.password = 'fake-password';
		configuredUrl.pathname = `/v2/${fakePathSecret}`;
		configuredUrl.searchParams.set('token', fakeQuerySecret);
		rpcUrlMap[1329] = configuredUrl.href;
		const sanitized = sanitizeError(new Error(`HTTP request failed. Status: 500. URL: ${rpcUrlMap[1329]}. Details: ${fakePathSecret} ${fakeQuerySecret}`));

		expect(sanitized).toContain('Status: 500');
		expect(sanitized).toContain('[redacted');
		expect(sanitized).not.toContain('fake-user');
		expect(sanitized).not.toContain('fake-password');
		expect(sanitized).not.toContain(fakePathSecret);
		expect(sanitized).not.toContain(fakeQuerySecret);
		expect(sanitized).toContain('https://rpc.example.test/[redacted]?[redacted]');
	});

	it.each([
		{
			input: 'Authorization: ApiKey fake-api-key extra-secret status=500',
			secrets: ['fake-api-key', 'extra-secret']
		},
		{
			input: 'authorization=Token fake-token with-spaces; retry=true',
			secrets: ['fake-token', 'with-spaces']
		},
		{
			input: 'AUTHORIZATION: CustomScheme opaque custom credential; nextField=value',
			secrets: ['opaque', 'custom credential']
		},
		{
			input: 'Authorization: "Custom fake-quoted-secret\\"suffix"; status=403',
			secrets: ['fake-quoted-secret', 'suffix']
		},
		{
			input: String.raw`apiKey="fake\api\key" trailingField=safe`,
			secrets: [String.raw`fake\api\key`]
		},
		{
			input: String.raw`{\"authorization\":\"Digest fake-nonce fake-response\",\"status\":401}`,
			secrets: ['fake-nonce', 'fake-response']
		},
		{
			input: '{"authorization":"Custom fake-json-secret","status":500',
			secrets: ['fake-json-secret']
		},
		{
			input: "'password': 'fake-single-quoted-secret', status: 500",
			secrets: ['fake-single-quoted-secret']
		}
	])('redacts or fails closed for adversarial sensitive text: $input', ({ input, secrets }) => {
		const sanitized = sanitizeError(input);

		expect(sanitized).toContain('redacted');
		for (const secret of secrets) expect(sanitized).not.toContain(secret);
	});

	it('redacts parseable credential values while preserving diagnostics', () => {
		expect(sanitizeError('Authorization: ApiKey fake-api-key status=500')).toBe('Authorization: [redacted] status=500');
		expect(sanitizeError('authorization=Token fake-token, status=401')).toBe('authorization=[redacted], status=401');
		expect(sanitizeError('password="fake-password"; status=401')).toBe('password="[redacted]"; status=401');
		expect(sanitizeError('AUTHORIZATION: Custom opaque credential; nextField=value')).toBe('AUTHORIZATION: [redacted]; nextField=value');
	});

	it('recursively redacts normalized sensitive keys in nested JSON arrays and objects', () => {
		const secrets = ['fake-auth', 'fake-private', 'fake-api', 'fake-secret', 'fake-password', 'fake-embedded'];
		const input = JSON.stringify({
			status: 500,
			headers: { Authorization: `Custom ${secrets[0]}`, accept: 'application/json' },
			payload: [
				{ private_key: secrets[1], safe: 'preserved' },
				{ API_KEY: { escaped: `${secrets[2]}\\"suffix` } },
				{ tokens: ['erc20', { nested: 'public-token-data' }], signature: '0xpublic-signature', proof: '0xpublic-proof', sessionId: 'session-123' },
				{ child: { Secrets: secrets[3], PASSWORDS: `${secrets[4]}\\with\\backslashes` } }
			],
			notes: `Authorization: Custom ${secrets[5]}`,
			trailing: { requestId: 'request-123' }
		});

		const sanitized = sanitizeError(input);
		const parsed = JSON.parse(sanitized);

		expect(parsed).toEqual({
			status: 500,
			headers: { Authorization: '[redacted]', accept: 'application/json' },
			payload: [
				{ private_key: '[redacted]', safe: 'preserved' },
				{ API_KEY: '[redacted]' },
				{ tokens: ['erc20', { nested: 'public-token-data' }], signature: '0xpublic-signature', proof: '0xpublic-proof', sessionId: 'session-123' },
				{ child: { Secrets: '[redacted]', PASSWORDS: '[redacted]' } }
			],
			notes: 'Authorization: [redacted]',
			trailing: { requestId: 'request-123' }
		});
		for (const secret of secrets) expect(sanitized).not.toContain(secret);
	});

	it.each([
		'authorization',
		'Authorization',
		'privateKey',
		'PRIVATE_KEY',
		'apiKey',
		'api-key',
		'x-api-key',
		'proxy-authorization',
		'x-authorization-header',
		'x-auth-token',
		'access_token',
		'refreshToken',
		'id-token',
		'oauthAccessToken',
		'secret',
		'secrets',
		'client-secret',
		'clientCredentials',
		'aws_credentials',
		'aws-access-key-id',
		'credential',
		'dpop',
		'x-dpop-proof',
		'jwt',
		'client-assertion',
		'proof-of-possession',
		'password',
		'passwords',
		'db-passphrase',
		'Set-Cookie',
		'x-session-cookie'
	])('redacts every JSON value under normalized key %s', (key) => {
		const secret = `fake-${key}-fragment`;
		const sanitized = sanitizeError(JSON.stringify({ safe: 'kept', nested: [{ [key]: secret, trailing: 42 }] }));
		const parsed = JSON.parse(sanitized);

		expect(parsed).toEqual({ safe: 'kept', nested: [{ [key]: '[redacted]', trailing: 42 }] });
		expect(sanitized).not.toContain(secret);
		expect(sanitized).not.toContain('fake-');
	});

	it.each([
		{
			value: 'Bearer fake-bearer-value trailing-safe-field=500',
			secrets: ['fake-bearer-value']
		},
		{
			value: 'Basic ZmFrZS11c2VyOmZha2UtcGFzc3dvcmQ= status=401',
			secrets: ['ZmFrZS11c2VyOmZha2UtcGFzc3dvcmQ=']
		},
		{
			value: 'Token fake-token-value next=safe',
			secrets: ['fake-token-value']
		},
		{
			value: 'ApiKey fake-api-value; requestId=safe',
			secrets: ['fake-api-value']
		},
		{
			value: 'Digest username="fake-user", nonce="fake-nonce", response="fake-response"; status=401',
			secrets: ['fake-user', 'fake-nonce', 'fake-response']
		},
		{
			value: 'AWS4-HMAC-SHA256 Credential=fake-access/region, SignedHeaders=host, Signature=fake-signature requestId=safe',
			secrets: ['fake-access', 'fake-signature']
		}
	])('redacts standalone authorization value $value', ({ value, secrets }) => {
		const plain = sanitizeError(value);
		const json = sanitizeError(JSON.stringify({ message: value, status: 500 }));

		expect(plain).toContain('[redacted]');
		expect(plain).not.toBe('Sensitive error details redacted.');
		expect(JSON.parse(json).message).toContain('[redacted]');
		for (const secret of secrets) {
			expect(plain).not.toContain(secret);
			expect(json).not.toContain(secret);
		}
	});

	it.each([
		'Basic',
		'Bearer',
		'Digest',
		'DPoP',
		'GNAP',
		'HOBA',
		'Mutual',
		'Negotiate',
		'OAuth',
		'SCRAM-SHA-1',
		'SCRAM-SHA-256',
		'SCRAM-SHA-256-PLUS',
		'Signature',
		'VAPID',
		'AWS4-HMAC-SHA256',
		'AWS4-HMAC-SHA256-PAYLOAD',
		'Token',
		'ApiKey'
	])('redacts standalone standardized %s authorization values', (scheme) => {
		const secret = `fake-${scheme.toLowerCase()}-credential-fragment`;
		const credential = /^(digest)$/i.test(scheme)
			? `username=${secret}, nonce=fake-nonce`
			: /^(signature)$/i.test(scheme)
				? `keyId=${secret}, signature=fake-signature`
				: /^aws4-/i.test(scheme)
					? `Credential=${secret}/region, Signature=fake-signature`
					: /^scram-/i.test(scheme)
						? `username=${secret}, data=fake-data`
						: secret;
		const message = `${scheme} ${credential}`;
		const plain = sanitizeError(message);
		const json = sanitizeError(JSON.stringify({ message, trailing: { status: 401 } }));

		expect(plain).toBe(`${scheme} [redacted]`);
		expect(JSON.parse(json)).toEqual({ message: `${scheme} [redacted]`, trailing: { status: 401 } });
		expect(plain).not.toContain(secret);
		expect(json).not.toContain(secret);
		expect(plain).not.toContain('credential-fragment');
		expect(json).not.toContain('credential-fragment');
	});

	it.each([
		'Unsupported token type',
		'Unsupported token type: mystery',
		'Token transfer failed',
		'token: ERC20 transfer failed',
		'Signature verification failed',
		'signature: 0xpublic-transaction-signature',
		'proof: 0xpublic-merkle-proof',
		'session: disconnected after response',
		'sessionId: public-request-session',
		'Basic validation failed',
		'Digest parsing failed',
		'AWS request failed',
		'OAuth negotiation failed'
	])('preserves actionable non-credential text: %s', (message) => {
		expect(sanitizeError(message)).toBe(message);
		expect(JSON.parse(sanitizeError(JSON.stringify({ message, status: 400 })))).toEqual({ message, status: 400 });
	});

	it('redacts only exact structured credential keys', () => {
		const input = {
			token: 'public-token-address',
			signature: '0xpublic-signature',
			proof: '0xpublic-proof',
			session: 'public-session-state',
			sessionId: 'public-session-id',
			tokenType: 'Unsupported token type',
			signatureVerification: 'Signature verification failed',
			proofType: 'merkle',
			assertionType: 'urn:safe',
			requestSignatureValue: 'public-checksum',
			apiKeySuffix: 'last-four',
			accessToken: 'fake-access-token-secret',
			xApiKey: 'fake-api-key-secret'
		};

		expect(JSON.parse(sanitizeError(JSON.stringify(input)))).toEqual({
			...input,
			accessToken: '[redacted]',
			xApiKey: '[redacted]'
		});
	});

	it('keeps JSON valid while redacting URLs and configured secrets in nonsensitive fields', () => {
		const configuredSecret = 'fake-json-configured-secret';
		rpcUrlMap[1329] = `https://rpc.example.test/v2/${configuredSecret}`;
		const sanitized = sanitizeError(
			JSON.stringify({
				message: `request to ${rpcUrlMap[1329]} failed`,
				detached: configuredSecret,
				status: 500
			})
		);

		expect(JSON.parse(sanitized)).toEqual({
			message: 'request to https://rpc.example.test/[redacted] failed',
			detached: '[redacted]',
			status: 500
		});
		expect(sanitized).not.toContain(configuredSecret);
		expect(sanitized).toContain('rpc.example.test');
	});

	it('preserves known public RPC and docs URLs', () => {
		const message = 'RPC https://evm-rpc.sei-apis.com and testnet https://evm-rpc-testnet.sei-apis.com failed; docs: https://docs.sei.io/mcp';
		expect(sanitizeError(message)).toBe(message);
	});

	it('redacts configured private and wallet keys wherever upstream errors embed them', () => {
		const privateKeyBody = '1a'.repeat(32);
		const walletApiKey = 'fake-configured-wallet-key';
		process.env.PRIVATE_KEY = privateKeyBody;
		process.env.WALLET_API_KEY = walletApiKey;

		const inputs: unknown[] = [
			`upstream request included ${privateKeyBody}`,
			new Error(`transaction failed for 0x${privateKeyBody}`),
			JSON.stringify({
				privateKey: privateKeyBody,
				apiKey: walletApiKey,
				authorization: `Bearer ${walletApiKey}`
			})
		];

		for (const input of inputs) {
			const sanitized = sanitizeError(input);
			expect(sanitized).not.toContain(privateKeyBody);
			expect(sanitized).not.toContain(privateKeyBody.slice(0, 16));
			expect(sanitized).not.toContain(walletApiKey);
			expect(sanitized).not.toContain('fake-configured');
		}
	});

	it('ignores configured values shorter than the minimum secret length', () => {
		process.env.PRIVATE_KEY = 'a';
		process.env.WALLET_API_KEY = 'xy';

		expect(sanitizeError('A safe validation failure stays actionable')).toBe('A safe validation failure stays actionable');
	});
});
