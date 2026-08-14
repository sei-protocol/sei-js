/// <reference types="bun" />

type BunTestFunction = (...args: never[]) => unknown;
type BunTestClass = abstract new (...args: never[]) => object;

declare module 'bun:test' {
	namespace jest {
		type MockedFunction<T extends BunTestFunction> = Mock<T>;
		type MockedClass<T extends BunTestClass> = T & Mock<(...args: ConstructorParameters<T>) => InstanceType<T>>;
		type SpyInstance<T extends BunTestFunction = BunTestFunction> = Mock<T>;
		function mock(id: string, factory?: () => unknown): void | Promise<void>;
	}
}

declare const test: typeof import('bun:test').test;
declare const it: typeof import('bun:test').it;
declare const describe: typeof import('bun:test').describe;
declare const expect: typeof import('bun:test').expect;
declare const beforeAll: typeof import('bun:test').beforeAll;
declare const beforeEach: typeof import('bun:test').beforeEach;
declare const afterEach: typeof import('bun:test').afterEach;
declare const afterAll: typeof import('bun:test').afterAll;
declare const jest: typeof import('bun:test').jest;

declare namespace jest {
	type Mock<T extends BunTestFunction = BunTestFunction> = import('bun:test').Mock<T>;
	type MockedFunction<T extends BunTestFunction> = import('bun:test').Mock<T>;
	type SpyInstance<T extends BunTestFunction = BunTestFunction> = import('bun:test').Mock<T>;
}
