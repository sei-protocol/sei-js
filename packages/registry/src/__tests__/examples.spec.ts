import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import ts from 'typescript';
import * as registry from '../index';

const PACKAGE_ROOT = join(import.meta.dir, '../..');
const CODE_BLOCK = /^```(?:ts|tsx|typescript)(?:[ \t][^\n]*)?\r?\n([\s\S]*?)^```/gm;
const JSDOC_COMMENT = /\/\*\*[\s\S]*?\*\//g;
const EXAMPLE_TAG = /^@example\b[\s\S]*?(?=^@|(?![\s\S]))/gm;

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

function jsdocExamples(file: string): { blocks: Example[]; withoutCode: string[] } {
	const source = readFileSync(join(PACKAGE_ROOT, file), 'utf8');
	const blocks: Example[] = [];
	const withoutCode: string[] = [];
	for (const comment of source.matchAll(JSDOC_COMMENT)) {
		const line = lineAt(source, comment.index);
		const text = comment[0].replace(/^[ \t]*\* ?/gm, '');
		blocks.push(...codeBlocks(file, text, line));
		for (const tag of text.matchAll(EXAMPLE_TAG)) {
			if (codeBlocks(file, tag[0]).length === 0) withoutCode.push(`${file}:${line + lineAt(text, tag.index) - 1}`);
		}
	}
	return { blocks, withoutCode };
}

const sources = readdirSync(join(PACKAGE_ROOT, 'src'), { recursive: true, encoding: 'utf8' })
	.filter((path) => path.endsWith('.ts') && !path.includes('__tests__'))
	.sort()
	.map((path) => jsdocExamples(join('src', path)));
const examples = [...codeBlocks('README.md', readFileSync(join(PACKAGE_ROOT, 'README.md'), 'utf8')), ...sources.flatMap(({ blocks }) => blocks)];
const examplesWithoutCode = sources.flatMap(({ withoutCode }) => withoutCode);

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

function bindingNames(name: ts.BindingName): string[] {
	if (ts.isIdentifier(name)) return [name.text];
	return name.elements.flatMap((element) => (ts.isOmittedExpression(element) ? [] : bindingNames(element.name)));
}

function declaredNames(code: string): string[] {
	return ts
		.createSourceFile('example.ts', code, ts.ScriptTarget.Latest)
		.statements.filter(ts.isVariableStatement)
		.flatMap(({ declarationList }) => declarationList.declarations.flatMap(({ name }) => bindingNames(name)));
}

// Examples have to be synchronous: top-level await throws here, and a value logged later from a callback is not checked.
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
	it('include the README, the JSDoc, and code for every @example', () => {
		expect(examples.some(({ file }) => file === 'README.md')).toBeTrue();
		expect(examples.some(({ file }) => file !== 'README.md')).toBeTrue();
		expect(examplesWithoutCode).toEqual([]);
	});

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
