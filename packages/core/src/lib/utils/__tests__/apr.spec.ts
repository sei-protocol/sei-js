import { describe, expect, it } from '@jest/globals';
import { getUpcomingMintTokens } from '../apr';
import moment from 'moment';
import Long from 'long5';

const releaseSchedule = [
	{
		"token_release_amount": new Long(500000),
		"start_date": "2023-10-01",
		"end_date": "2023-10-20"
	},
	{
		"token_release_amount": new Long(500000),
		"start_date": "2023-11-01",
		"end_date": "2023-11-30"
	},
	{
		"token_release_amount": new Long(500000),
		"start_date": "2023-11-30",
		"end_date": "2023-12-31"
	},
	{
		"token_release_amount": new Long(10000000),
		"start_date": "2024-01-01",
		"end_date": "2024-12-31"
	},
	{
		"token_release_amount": new Long(10000000),
		"start_date": "2025-01-01",
		"end_date": "2025-12-31"
	},
	{
		"token_release_amount": new Long(8500000),
		"start_date": "2023-01-01",
		"end_date": "2023-09-30"
	},
]

describe('getUpcomingMintTokens', () => {
	// Test from 2023-01-01 to 2024-01-01 (exclusive).
	// This should get the full distribution from 10/01 - 10/20, 11/01-11/30, and 11/30-12/31
	it('should return a correct amount of tokens', () => {
		const result = getUpcomingMintTokens(moment("2023-01-01"), 365, releaseSchedule);

		expect(result).toBe(10000000);
	});

	it('handles gaps in releases', () => {
		// Test from 2023-10-11 to 2023-11-16 (exclusive).
		// This should get half the distribution from 10/1 - 10/20 and half from the release from 11/1 - 11/30
		const result = getUpcomingMintTokens(moment("2023-10-11"), 36, releaseSchedule);

		expect(result).toBe(500000);
	});

	it('handles input windows within the same release', () => {
		// Test any 73 day window (1/5 of 365 days) in 2025.
		// This should get 20% the distribution from 2025-01-01 to 2025-12-31
		const result = getUpcomingMintTokens(moment("2025-04-13"), 73, releaseSchedule);

		expect(result).toBe(2000000);
	});

	it('handles input windows that start before any schedule', () => {
		// Test from 2022-12-15 - 2023-10-1 (exclusive).
		// This should get 100% the distribution from 2023-01-01 to 2023-09-30
		const result = getUpcomingMintTokens(moment("2022-12-15"), 289, releaseSchedule);

		expect(result).toBe(8500000);
	});

	it('handles input windows that end after any schedule', () => {
		// Test the last 73 days of 2025 to sometime in 2026.
		// This should get 20% the distribution from 2025-01-01 to 2025-12-31
		const result = getUpcomingMintTokens(moment("2025-10-20"), 365, releaseSchedule);

		expect(result).toBe(2000000);
	});
});