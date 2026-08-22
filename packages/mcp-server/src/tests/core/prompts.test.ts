import { afterEach, describe, expect, it, jest } from 'bun:test';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { ZodTypeAny } from 'zod';
import * as config from '../../core/config.js';
import { registerEVMPrompts } from '../../core/prompts.js';

interface PromptRegistration {
	schema: Record<string, ZodTypeAny>;
	handler: (params: Record<string, string | undefined>) => { messages: Array<{ content: { text: string } }> };
}

function registerPrompts(): Map<string, PromptRegistration> {
	const prompts = new Map<string, PromptRegistration>();
	const server = {
		prompt: jest.fn((name: string, _description: string, schema: Record<string, ZodTypeAny>, handler: PromptRegistration['handler']) => {
			prompts.set(name, { schema, handler });
		})
	} as unknown as McpServer;
	registerEVMPrompts(server);
	return prompts;
}

describe('EVM prompts', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('constrains analyze_token tokenType and always produces a nonempty prompt', () => {
		jest.spyOn(config, 'isWalletEnabled').mockReturnValue(false);
		const prompt = registerPrompts().get('analyze_token');
		if (!prompt) throw new Error('analyze_token was not registered');

		expect(['auto', 'erc20', 'erc721', 'nft'].every((value) => prompt.schema.tokenType.safeParse(value).success)).toBe(true);
		expect(prompt.schema.tokenType.safeParse('unsupported').success).toBe(false);
		for (const tokenType of ['auto', 'erc20', 'erc721', 'nft']) {
			const result = prompt.handler({ tokenAddress: '0x1234', tokenType, network: 'sei' });
			expect(result.messages[0].content.text.length).toBeGreaterThan(0);
		}
		expect(() => prompt.handler({ tokenAddress: '0x1234', tokenType: 'unsupported', network: 'sei' })).toThrow('Unsupported token type');
	});

	it('accepts and normalizes only supported network selectors', () => {
		jest.spyOn(config, 'isWalletEnabled').mockReturnValue(false);
		const prompt = registerPrompts().get('explore_block');
		if (!prompt) throw new Error('explore_block was not registered');

		expect(prompt.schema.network.parse('1329')).toBe('sei');
		expect(prompt.schema.network.parse('0x530')).toBe('sei-testnet');
		expect(prompt.schema.network.parse(' SEI ')).toBe('sei');
		expect(prompt.schema.network.parse('0X530')).toBe('sei-testnet');
		expect(prompt.schema.network.safeParse('unknown-network').success).toBe(false);
	});

	it('rejects unknown values in compare_networks', () => {
		jest.spyOn(config, 'isWalletEnabled').mockReturnValue(false);
		const prompt = registerPrompts().get('compare_networks');
		if (!prompt) throw new Error('compare_networks was not registered');

		expect(prompt.schema.networkList.parse('sei,0x530')).toBe('sei,sei-testnet');
		expect(prompt.schema.networkList.safeParse('sei,unknown-network').success).toBe(false);
	});
});
