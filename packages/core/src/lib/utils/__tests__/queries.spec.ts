import { describe, expect, it } from '@jest/globals';
import { getUpcomingMintTokens } from '../queries';
import moment from 'moment';
import Long from 'long';

jest.mock('long', () => {
	const originalModule = jest.requireActual('long');

	return {
		...originalModule,
	};
});

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
		"token_release_amount": new Long(8500000),
		"start_date": "2023-01-01",
		"end_date": "2023-10-01"
	},
]

describe('getUpcomingMintTokens', () => {
	it('should return a correct amount of tokens', () => {
		const result = getUpcomingMintTokens(moment("2023-01-01"), 365, releaseSchedule);

		expect(result).toBe(10000000);
	});
});