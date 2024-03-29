import { parseEther } from 'ethers';
/**
 * Parses a number representing an amount of Sei into its equivalent BigInt representation.
 * 1 = 10^18 (1 followed by 18 zeros)
 * @param amount The string representing the amount of Sei to parse.
 * @returns The BigInt representation of the parsed Sei amount.
 * @category Units
 */
export function parseSei(amount: string): bigint {
	return parseEther(amount);
}
