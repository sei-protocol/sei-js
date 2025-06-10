import type { AxiosError, AxiosResponse } from 'axios';

/**
 * Format error messages for consistent error handling
 */
export const formatErr = (err: AxiosError | Error | unknown): string => {
	if (err && typeof err === 'object' && 'response' in err) {
		const axiosErr = err as AxiosError;
		return `Request failed with status code ${axiosErr.response?.status}`;
	}
	if (err instanceof Error) {
		return err.message;
	}
	return String(err);
};

/**
 * Throw an error if the axios response indicates failure
 */
export const throwOnAxiosError = (response: AxiosResponse, message: string): void => {
	if (response.status < 200 || response.status >= 300) {
		throw new Error(`${message}: ${response.status} ${response.statusText}`);
	}
};
