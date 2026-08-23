import type { Server } from 'node:http';

export type AsyncOperation = () => unknown | Promise<unknown>;

export async function collectOperationErrors(operations: AsyncOperation[]): Promise<unknown[]> {
	const results = await Promise.allSettled(operations.map((operation) => Promise.resolve().then(operation)));
	return results.filter((result): result is PromiseRejectedResult => result.status === 'rejected').map((result) => result.reason);
}

export function throwCollectedErrors(errors: unknown[], message: string): void {
	if (errors.length > 0) {
		throw new AggregateError(errors, message);
	}
}

export async function runAllOperations(operations: AsyncOperation[], message: string): Promise<void> {
	throwCollectedErrors(await collectOperationErrors(operations), message);
}

export function closeHttpServer(server: Server | undefined): Promise<void> {
	if (!server) return Promise.resolve();

	return new Promise<void>((resolve, reject) => {
		try {
			server.close((error) => {
				if (error && (error as NodeJS.ErrnoException).code !== 'ERR_SERVER_NOT_RUNNING') reject(error);
				else resolve();
			});
		} catch (error) {
			if ((error as NodeJS.ErrnoException).code === 'ERR_SERVER_NOT_RUNNING') resolve();
			else reject(error);
		}
	});
}
