/**
 * Parses a number representing an amount of Sei into its equivalent BigInt representation.
 * 1 = 10^18 (1 followed by 18 zeros)
 * @param amount The integer representing the amount of Sei to parse.
 * @returns The BigInt representation of the parsed Sei amount.
 * @category Units
 */
export function parseSei(amount: number): bigint {
	const decimals = BigInt(10) ** 18n; // 10^18
	return BigInt(amount) * decimals;
}
