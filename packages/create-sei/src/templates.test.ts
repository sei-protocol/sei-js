import { describe, expect, it } from 'bun:test';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const PACKAGE_ROOT = path.resolve(import.meta.dir, '..');
const TEMPLATES_DIR = path.join(PACKAGE_ROOT, 'templates');
const EXTENSIONS_DIR = path.join(PACKAGE_ROOT, 'extensions');

const EXPECTED_TEMPLATES = ['next-template'];
const EXPECTED_EXTENSIONS = ['precompiles'];

describe('Templates', () => {
	it('templates directory exists', async () => {
		const stat = await fs.stat(TEMPLATES_DIR);
		expect(stat.isDirectory()).toBe(true);
	});

	it.each(EXPECTED_TEMPLATES)('%s template directory exists', async (template) => {
		const templatePath = path.join(TEMPLATES_DIR, template);
		const stat = await fs.stat(templatePath);
		expect(stat.isDirectory()).toBe(true);
	});

	it.each(EXPECTED_TEMPLATES)('%s template has a valid package.json', async (template) => {
		const pkgPath = path.join(TEMPLATES_DIR, template, 'package.json');
		const contents = await fs.readFile(pkgPath, 'utf-8');
		const parsed = JSON.parse(contents);
		expect(typeof parsed.name).toBe('string');
		expect(parsed.name.trim().length).toBeGreaterThan(0);
		expect(typeof parsed.version).toBe('string');
	});

	it.each(EXPECTED_TEMPLATES)('%s template has a tsconfig.json', async (template) => {
		const tsconfigPath = path.join(TEMPLATES_DIR, template, 'tsconfig.json');
		const stat = await fs.stat(tsconfigPath);
		expect(stat.isFile()).toBe(true);
	});

	it.each(EXPECTED_TEMPLATES)('%s template has a src/ directory', async (template) => {
		const srcPath = path.join(TEMPLATES_DIR, template, 'src');
		const stat = await fs.stat(srcPath);
		expect(stat.isDirectory()).toBe(true);
	});
});

describe('Extensions', () => {
	it('extensions directory exists', async () => {
		const stat = await fs.stat(EXTENSIONS_DIR);
		expect(stat.isDirectory()).toBe(true);
	});

	it.each(EXPECTED_EXTENSIONS)('%s extension directory exists', async (extension) => {
		const extensionPath = path.join(EXTENSIONS_DIR, extension);
		const stat = await fs.stat(extensionPath);
		expect(stat.isDirectory()).toBe(true);
	});

	it.each(EXPECTED_EXTENSIONS)('%s extension has a valid package.json', async (extension) => {
		const pkgPath = path.join(EXTENSIONS_DIR, extension, 'package.json');
		const contents = await fs.readFile(pkgPath, 'utf-8');
		const parsed = JSON.parse(contents);
		expect(typeof parsed.name).toBe('string');
		expect(parsed.name.trim().length).toBeGreaterThan(0);
	});
});
