import moment, { Moment } from 'moment';
import { PoolSDKType } from '@sei-js/proto/types/cosmos/staking/v1beta1/staking';
import { ParamsSDKType, ScheduledTokenReleaseSDKType } from '@sei-js/proto/types/mint/v1beta1/mint';
import { SeiLCDQueryClient } from '../core';

/**
 * Calculates the estimated staking APR based on the upcoming token release schedule and the current number of bonded tokens.
 * The APR is estimated to be the number of tokens released in next 365 days over the number of bonded tokens.
 * @param queryClient A client configured to query the sei blockchain for staking pools and mint params.
 * @returns The estimated APR percentage.
 * @category Staking
 */
export async function estimateStakingAPR(queryClient: SeiLCDQueryClient): Promise<number> {
	// Query number of bonded tokens
	const pool = await getPool(queryClient);
	const bondedTokens = Number(pool?.bonded_tokens);

	// Query mint schedule
	const mintParams = await getMintParams(queryClient);
	const mintSchedule = mintParams?.token_release_schedule;

	if (!mintSchedule || !pool) {
		throw new Error('Failed to query mintSchedule or pool');
	}

	// Calculate number of tokens to be minted in the next year.
	const upcomingMintTokens = getUpcomingMintTokens(moment(), 365, mintSchedule);

	// APR estimate is the number of tokens to be minted / current number of bonded tokens.
	return upcomingMintTokens / bondedTokens;
}

/**
 * Gets data on the staking pool.
 * @param queryClient A client configured to query the sei blockchain.
 * @returns An object with information about the amount of bonded and non-bonded tokens in the staking pool.
 * @category Staking
 */
export async function getPool(queryClient: SeiLCDQueryClient): Promise<PoolSDKType | undefined> {
	try {
		const result = await queryClient.cosmos.staking.v1beta1.pool({});
		return result.pool;
	} catch (error) {
		console.log(error);
	}
}

/**
 * Retrieves the upcoming Mint schedule
 * @param queryClient A client configured to query the sei blockchain.
 * @returns An object with information about the mint schedule and token denom.
 * @category Staking
 */
export async function getMintParams(queryClient: SeiLCDQueryClient): Promise<ParamsSDKType | undefined> {
	try {
		const result = await queryClient.seiprotocol.seichain.mint.params({});
		return result.params;
	} catch (error) {
		console.log(error);
	}
}

/**
 * Gets the number of tokens that will be minted in the given window based on the given releaseSchedule.
 * Assumes that releaseSchedule has no overlapping schedules.
 * @param startDate A moment object representing start of the window to query.
 * @param days The number of days in the window.
 * @param releaseSchedule The token release schedule. (See {@linkcode getMintParams}).
 * @returns The number of tokens to be released in the given window.
 * @category Staking
 */
export function getUpcomingMintTokens(startDate: Moment, days: number, releaseSchedule: ScheduledTokenReleaseSDKType[]): number {
	// End date is the exclusive end date of the window to query.
	// I.e. if start date is 2023-1-1 and days is 365, end date here will be 2024-1-1 so rewards will be calculated from 2023-1-1 to 2023-12-31
	const endDate = startDate.clone().add(days, 'days');

	// Sort release schedule in increasing order of start time.
	const sortedReleaseSchedule: ReleaseSchedule[] = getSortedReleaseSchedule(releaseSchedule);

	let tokens = 0;
	for (const release of sortedReleaseSchedule) {
		// Skip all schedules that ended before today.
		if (release.endDate.isBefore(startDate)) {
			continue;
		}
		// If the start date is after end date, we have come to the end of all releases we should consider.
		if (release.startDate.isAfter(endDate)) {
			break;
		}
		// All releases from here are part of the window.
		// The case where this release started before today.
		if (release.startDate.isBefore(startDate)) {
			// Need to deduct 1 day from endDate to make it an inclusive end date.
			const earlierInclusiveEndDate = moment.min(endDate.clone().subtract(1, 'days'), release.endDate);

			// Number of days left in this release.
			const daysLeft: number = calculateDaysInclusive(startDate, earlierInclusiveEndDate);
			const totalPeriod: number = calculateDaysInclusive(release.startDate, release.endDate);
			tokens += (daysLeft / totalPeriod) * release.tokenReleaseAmount;
		}

		// The case where this release ends after our search window.
		else if (release.endDate.isAfter(endDate)) {
			const daysLeft: number = Math.round(endDate.diff(release.startDate, 'days', true));
			const totalPeriod: number = calculateDaysInclusive(release.startDate, release.endDate);
			tokens += (daysLeft / totalPeriod) * release.tokenReleaseAmount;
		}

		// In the final case, the entire period falls within our window.
		else {
			tokens += release.tokenReleaseAmount;
		}
	}

	return tokens;
}

// Converts the releaseSchedule into ReleaseSchedule[] and sorts it by start date.
function getSortedReleaseSchedule(releaseSchedule: ScheduledTokenReleaseSDKType[]) {
	const releaseScheduleTimes = releaseSchedule.map((schedule) => {
		return createReleaseSchedule(schedule.start_date, schedule.end_date, schedule.token_release_amount);
	});

	// Sort release schedule in increasing order of start time.
	return releaseScheduleTimes.sort((x, y) => {
		if (x.startDate.isAfter(y.startDate)) {
			return 1;
		} else if (y.startDate.isAfter(x.startDate)) {
			return -1;
		}
		return 0;
	});
}

// Returns the number of days in the window inclusive of the start and end date.
function calculateDaysInclusive(startDate: Moment, endDate: Moment) {
	return Math.round(endDate.diff(startDate, 'days', true)) + 1;
}

interface ReleaseSchedule {
	startDate: Moment;
	endDate: Moment;
	tokenReleaseAmount: number;
}

function createReleaseSchedule(start_date: string, end_date: string, token_release_amount: bigint): ReleaseSchedule {
	return {
		startDate: moment(start_date),
		endDate: moment(end_date),
		tokenReleaseAmount: Number(token_release_amount)
	};
}
