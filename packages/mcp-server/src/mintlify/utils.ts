/**
 * Format error messages for consistent error handling
 */
export const formatErr = (err: Error | unknown): string => {
	if (err instanceof Error) {
		return err.message;
	}
	return String(err);
};
