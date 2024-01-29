import { ScheduledTokenReleaseSDKType } from "@sei-js/proto/dist/types/codegen/seiprotocol/seichain/mint/v1beta1/mint";
import { getQueryClient } from "../queryClient";
import moment, { Moment } from 'moment';
export type QueryClient = Awaited<ReturnType<typeof getQueryClient>>;

export async function estimateStakingAPR(queryClient: QueryClient) {
    // Query number of bonded tokens
    const pool = await getPool(queryClient);
    const bondedTokens = Number(pool?.bonded_tokens);

    // Query mint schedule
    const mintParams = await getMintParams(queryClient);
    const mintSchedule = mintParams?.token_release_schedule;

    if (!mintSchedule || !pool) {
        throw new Error("Failed to query mintSchedule or pool");
    }

    // Calculate number of tokens to be minted in the next year.
    const upcomingMintTokens = getUpcomingMintTokens(moment(), 365, mintSchedule);

    // APR estimate is the number of tokens to be minted / current number of bonded tokens.
    return upcomingMintTokens / bondedTokens
}

// Helper function to query the staking pool.
export async function getPool(queryClient: QueryClient) {
	try {
		const result = await queryClient.cosmos.staking.v1beta1.pool({});
		return result.pool;
	} catch (error) {
		console.log(error);
	}
}

// Helper function to query the mint module params.
export async function getMintParams(queryClient: QueryClient) {
	try {
		const result = await queryClient.seiprotocol.seichain.mint.params({});
		return result.params;
	} catch (error) {
		console.log(error);
	}
}

// Gets the number of tokens that will be minted in the given window based on the given releaseSchedule.
// Assumes that releaseSchedule has no overlapping schedules.
export function getUpcomingMintTokens(startDate: Moment, days: number, releaseSchedule: ScheduledTokenReleaseSDKType[]): number {
    // End date is the exclusive end date of the window to query. 
    // Ie. if start date is 2023-1-1 and days is 365, end date here will be 2024-1-1 so rewards will be calculated from 2023-1-1 to 2023-12-31
    const endDate = startDate.clone().add(days, 'days')

    // Sort release schedule in increasing order of start time.
    let sortedReleaseSchedule: ReleaseSchedule[] = getSortedReleaseSchedule(releaseSchedule);

    var tokens: number = 0
    for (var release of sortedReleaseSchedule) {
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
            let earlierInclusiveEndDate = moment.min(endDate.clone().subtract(1, "days"), release.endDate);

            // Number of days left in this release.
            let daysLeft: number = calculateDaysInclusive(startDate, earlierInclusiveEndDate);
            let totalPeriod: number = calculateDaysInclusive(release.startDate, release.endDate);
            tokens += (daysLeft / totalPeriod) * release.tokenReleaseAmount;
        }

        // The case where this release ends after our search window.
        else if (release.endDate.isAfter(endDate)) {
            let daysLeft: number  = endDate.diff(release.startDate, 'days');
            let totalPeriod: number  = calculateDaysInclusive(release.startDate, release.endDate);
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
        let releaseScheduleTimes = releaseSchedule.map((schedule) => {
            return CreateReleaseSchedule(schedule.start_date, schedule.end_date, schedule.token_release_amount);
        })

        // Sort release schedule in increasing order of start time.
        let sortedReleaseSchedule = releaseScheduleTimes.sort((x, y) => {
            if (x.startDate.isAfter(y.startDate)) {
                return 1;
            }
            else if (y.startDate.isAfter(x.startDate)) {
                return -1;
            }
            return 0;
        })

        return sortedReleaseSchedule;
}

// Returns the number of days in the window inclusive of the start and end date.
function calculateDaysInclusive(startDate: Moment, endDate: Moment) {
    return endDate.diff(startDate, 'days') + 1;
}

interface ReleaseSchedule {
    startDate: Moment;
    endDate: Moment;
    tokenReleaseAmount: number;
}

function CreateReleaseSchedule(start_date: string, end_date: string, token_release_amount: Long): ReleaseSchedule {
    return {
        startDate: moment(start_date),
        endDate: moment(end_date),
        tokenReleaseAmount: Number(token_release_amount),
    }
}