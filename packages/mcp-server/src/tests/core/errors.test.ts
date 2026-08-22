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
		expect(sanitized).not.toContain('rpc.example.test');
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
			secrets: ['fake', 'api', 'key']
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
	])('fails closed for ambiguous sensitive text: $input', ({ input, secrets }) => {
		const sanitized = sanitizeError(input);

		expect(sanitized).toBe('Sensitive error details redacted.');
		for (const secret of secrets) expect(sanitized).not.toContain(secret);
	});

	it('recursively redacts normalized sensitive keys in nested JSON arrays and objects', () => {
		const secrets = ['fake-auth', 'fake-private', 'fake-api', 'fake-token', 'fake-secret', 'fake-password', 'fake-nested', 'fake-embedded'];
		const input = JSON.stringify({
			status: 500,
			headers: { Authorization: `Custom ${secrets[0]}`, accept: 'application/json' },
			payload: [
				{ private_key: secrets[1], safe: 'preserved' },
				{ API_KEY: { escaped: `${secrets[2]}\\"suffix` } },
				{ tokens: [secrets[3], { nested: secrets[6] }] },
				{ child: { Secrets: secrets[4], PASSWORDS: `${secrets[5]}\\with\\backslashes` } }
			],
			notes: `Authorization: Custom ${secrets[7]}`,
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
				{ tokens: '[redacted]' },
				{ child: { Secrets: '[redacted]', PASSWORDS: '[redacted]' } }
			],
			notes: 'Sensitive error details redacted.',
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
		'api-key-suffix',
		'proxy-authorization',
		'x-authorization-header',
		'x-auth-token',
		'token',
		'tokens',
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
		'signed-jwt-value',
		'client-assertion',
		'assertion-type',
		'signature',
		'request-signature-value',
		'proof',
		'proof-of-possession',
		'password',
		'passwords',
		'db-passphrase',
		'Set-Cookie',
		'session',
		'session-id',
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
		},
		{
			value: 'AWS fake-access:fake-secret trailing=safe',
			secrets: ['fake-access', 'fake-secret']
		}
	])('redacts standalone authorization value $value', ({ value, secrets }) => {
		const plain = sanitizeError(`Upstream rejected ${value}`);
		const json = sanitizeError(JSON.stringify({ message: `Upstream rejected ${value}`, status: 500 }));

		expect(plain).toBe('Sensitive error details redacted.');
		expect(JSON.parse(json)).toEqual({ message: 'Sensitive error details redacted.', status: 500 });
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
		const message = `Upstream rejected ${scheme} ${secret}; status=401`;
		const plain = sanitizeError(message);
		const json = sanitizeError(JSON.stringify({ message, trailing: { status: 401 } }));

		expect(plain).toBe('Sensitive error details redacted.');
		expect(JSON.parse(json)).toEqual({
			message: 'Sensitive error details redacted.',
			trailing: { status: 401 }
		});
		expect(plain).not.toContain(secret);
		expect(json).not.toContain(secret);
		expect(plain).not.toContain('credential-fragment');
		expect(json).not.toContain('credential-fragment');
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
			message: 'request to [redacted URL] failed',
			detached: '[redacted]',
			status: 500
		});
		expect(sanitized).not.toContain(configuredSecret);
		expect(sanitized).not.toContain('rpc.example.test');
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
});
