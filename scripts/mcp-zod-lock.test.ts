import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { type ParseError, parse } from 'jsonc-parser';
import { bunLockResolvedVersion, findMcpSdkZodSplit, formatMcpSdkZodSplit } from './mcp-zod-lock.js';

describe('mcp sdk zod lock', () => {
	test('reads versions from bun.lock package tuples', () => {
		expect(bunLockResolvedVersion(['zod@3.25.76', '', {}, 'sha'])).toBe('3.25.76');
		expect(bunLockResolvedVersion(['@modelcontextprotocol/sdk@1.30.0', '', {}, 'sha'])).toBe('1.30.0');
		expect(bunLockResolvedVersion({ version: '4.0.5' })).toBeUndefined();
	});

	test('reports when the MCP SDK nested a different zod than the workspace', () => {
		const split = findMcpSdkZodSplit({
			zod: ['zod@3.25.76', '', {}, 'sha'],
			'@modelcontextprotocol/sdk/zod': ['zod@4.0.5', '', {}, 'sha']
		});

		expect(split).toEqual({ hoisted: '3.25.76', nested: '4.0.5' });
		expect(formatMcpSdkZodSplit(split!)).toBe('@modelcontextprotocol/sdk resolved zod@4.0.5 while the workspace hoisted zod@3.25.76');
	});

	test('accepts a shared resolution, including an exact nested pin of the same version', () => {
		expect(
			findMcpSdkZodSplit({
				zod: ['zod@4.0.5', '', {}, 'sha']
			})
		).toBeUndefined();
		expect(
			findMcpSdkZodSplit({
				zod: ['zod@4.0.5', '', {}, 'sha'],
				'@modelcontextprotocol/sdk/zod': ['zod@4.0.5', '', {}, 'sha']
			})
		).toBeUndefined();
	});

	test('the repo lockfile keeps the MCP SDK on the same zod as mcp-server', () => {
		const parseErrors: ParseError[] = [];
		const lockfile = parse(readFileSync(join(import.meta.dir, '..', 'bun.lock'), 'utf8'), parseErrors, {
			allowTrailingComma: true
		}) as { packages?: Record<string, unknown> };

		expect(parseErrors).toEqual([]);
		expect(findMcpSdkZodSplit(lockfile.packages ?? {})).toBeUndefined();
	});
});
