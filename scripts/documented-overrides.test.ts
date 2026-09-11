import { describe, expect, test } from 'bun:test';
import { documentedOverrideBlocks } from './documented-overrides.js';

const readme = `# Package

## Required consumer overrides

Complete npm root overrides:
\`\`\`json
{
	"overrides": {
		"axios": "1.18.0",
		"viem": {
			"ws": "8.21.0"
		}
	}
}
\`\`\`

Complete Bun root overrides:
\`\`\`json
{
	"overrides": {
		"axios": "1.18.0"
	}
}
\`\`\`

## Quick start

\`\`\`json
{
	"overrides": {
		"unrelated": "1.0.0"
	}
}
\`\`\`
`;

describe('documented override blocks', () => {
	test('returns every block in the named section, in document order', () => {
		expect(documentedOverrideBlocks(readme, 'Required consumer overrides')).toEqual([{ axios: '1.18.0', viem: { ws: '8.21.0' } }, { axios: '1.18.0' }]);
	});

	test('stops at the next section so unrelated blocks are not compared', () => {
		expect(documentedOverrideBlocks(readme, 'Quick start')).toEqual([{ unrelated: '1.0.0' }]);
	});

	test('fails when the section is missing rather than silently comparing nothing', () => {
		expect(() => documentedOverrideBlocks(readme, 'Absent section')).toThrow('no "## Absent section" section');
	});

	test('fails on a block that is not valid JSON', () => {
		expect(() => documentedOverrideBlocks('## S\n```json\n{ "overrides": }\n```\n', 'S')).toThrow('block 1 is not valid JSON');
	});

	test('fails on a block that documents no overrides', () => {
		expect(() => documentedOverrideBlocks('## S\n```json\n{ "dependencies": {} }\n```\n', 'S')).toThrow('block 1 has no "overrides" key');
	});
});
