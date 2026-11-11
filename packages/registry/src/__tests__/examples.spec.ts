import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import ts from 'typescript';
import * as registry from '../index';

const PACKAGE_ROOT = join(import.meta.dir, '../..');
const CODE_BLOCK = /^```(?:ts|tsx|typescript)\n([\s\S]*?)^```/gm;
const JSDOC_COMMENT = /\/\*\*[\s\S]*?\*\//g;

interface Example {
	file: string;
	/** Line of the opening code fence. */
	line: number;
	code: string;
}

function lineAt(text: string, index: number): number {
	return text.slice(0, index).split('\n').length;
}

function codeBlocks(file: string, text: string, firstLine = 1): Example[] {
	return [...text.matchAll(CODE_BLOCK)].map((match) => ({ file, line: firstLine + lineAt(text, match.index) - 1, code: match[1] }));
}

function jsdocExamples(file: string): Example[] {
	const source = readFileSync(join(PACKAGE_ROOT, file), 'utf8');
	return [...source.matchAll(JSDOC_COMMENT)].flatMap((comment) => {
		const line = lineAt(source, comment.index);
		const text = comment[0].replace(/^[ \t]*\* ?/gm, '');
		const blocks = codeBlocks(file, text, line);
		if (text.includes('@example') && blocks.length === 0) {
			throw new Error(`${file}:${line} has an @example without a TypeScript code block`);
		}
		return blocks;
	});
}

const examples = [
	...codeBlocks('README.md', readFileSync(join(PACKAGE_ROOT, 'README.md'), 'utf8')),
	...readdirSync(join(PACKAGE_ROOT, 'src'), { recursive: true, encoding: 'utf8' })
		.filter((path) => path.endsWith('.ts') && !path.includes('__tests__'))
		.sort()
		.flatMap((path) => jsdocExamples(join('src', path)))
];

function typeCheck(examples: Example[]): string[] {
	const files = new Map(examples.map((example, index) => [join(PACKAGE_ROOT, `example-${index}.ts`), example]));
	const options: ts.CompilerOptions = {
		strict: true,
		noEmit: true,
		skipLibCheck: true,
		types: [],
		target: ts.ScriptTarget.ES2022,
		module: ts.ModuleKind.ESNext,
		moduleResolution: ts.ModuleResolutionKind.Bundler,
		resolveJsonModule: true,
		paths: { '@sei-js/registry': [join(PACKAGE_ROOT, 'src/index.ts')] }
	};
	const host = ts.createCompilerHost(options);
	host.fileExists = (fileName) => files.has(fileName) || ts.sys.fileExists(fileName);
	host.readFile = (fileName) => files.get(fileName)?.code ?? ts.sys.readFile(fileName);
	const program = ts.createProgram([...files.keys()], options, host);

	return ts
		.getPreEmitDiagnostics(program)
		.filter(({ file }) => !file || files.has(file.fileName))
		.map((diagnostic) => {
			const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
			const example = diagnostic.file && files.get(diagnostic.file.fileName);
			if (!diagnostic.file || !example || diagnostic.start === undefined) return message;
			const { line } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
			return `${example.file}:${example.line + line + 1}: ${message}`;
		});
}

function declaredNames(code: string): string[] {
	return ts
		.createSourceFile('example.ts', code, ts.ScriptTarget.Latest)
		.statements.filter(ts.isVariableStatement)
		.flatMap(({ declarationList }) => declarationList.declarations.map(({ name }) => name))
		.filter(ts.isIdentifier)
		.map(({ text }) => text);
}

function run(code: string): Record<string, unknown> {
	const { outputText } = ts.transpileModule(`${code}\nexport { ${declaredNames(code).join(', ')} };`, {
		compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
	});
	const exported: Record<string, unknown> = {};
	const requireRegistry = (specifier: string) => {
		if (specifier !== '@sei-js/registry') throw new Error(`Examples can only import @sei-js/registry, not ${specifier}`);
		return registry;
	};
	new Function('require', 'exports', outputText)(requireRegistry, exported);
	return exported;
}

describe('documented examples', () => {
	it('type-check against the package source', () => {
		expect(typeCheck(examples)).toEqual([]);
	}, 30_000);

	for (const example of examples) {
		it(`${example.file}:${example.line} runs and defines every value it declares or logs`, () => {
			const log = jest.spyOn(console, 'log').mockImplementation(() => {});
			try {
				const values = [
					...Object.entries(run(example.code)),
					...log.mock.calls.flatMap((args, call) => args.map((arg): [string, unknown] => [`console.log #${call + 1}`, arg]))
				];
				expect(values.filter(([, value]) => value === undefined).map(([name]) => name)).toEqual([]);
			} finally {
				log.mockRestore();
			}
		});
	}
});
