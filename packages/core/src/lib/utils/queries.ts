import { ScheduledTokenRelease, ScheduledTokenReleaseSDKType } from "@sei-js/proto/dist/types/codegen/seiprotocol/seichain/mint/v1beta1/mint";
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
    const endDate = startDate.add(days, 'days')

    // Sort release schedule in increasing order of start time.
    let sortedReleaseSchedule: ReleaseSchedule[] = getSortedReleaseSchedule(releaseSchedule);

    var tokens: number = 0
    for (var release of sortedReleaseSchedule) {
        // Skip all schedules that ended before today.
        if (release.end_date.isBefore(startDate)) {
            continue;
        }
        // If the start date is after end date, we have come to the end of all releases we should consider.
        if (release.start_date.isAfter(endDate)) {
            break;
        }
        // All releases from here are part of the window.
        // The case where this release started before today.
        if (release.start_date.isBefore(startDate)) {
            var daysLeft = release.end_date.diff(startDate, 'days');
            var totalPeriod = release.end_date.diff(release.start_date, 'days')
            tokens += (daysLeft / totalPeriod) * release.token_release_amount;
        }

        // The case where this release ends after our search window.
        if (release.end_date.isAfter(endDate)) {
            var daysLeft = endDate.diff(release.start_date, 'days');
            var totalPeriod = release.end_date.diff(release.start_date, 'days')
            tokens += (daysLeft / totalPeriod) * release.token_release_amount;
        }

        // In the final case, the entire period falls within our window.
        else {
            tokens += release.token_release_amount;
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
            if (x.start_date.isAfter(y.start_date)) {
                return 1;
            }
            else if (y.start_date.isAfter(x.start_date)) {
                return -1;
            }
            return 0;
        })

        return sortedReleaseSchedule;
}

interface ReleaseSchedule {
    start_date: Moment;
    end_date: Moment;
    token_release_amount: number;
}

function CreateReleaseSchedule(start_date: string, end_date: string, token_release_amount: Long): ReleaseSchedule {
    return {
        start_date: moment(start_date),
        end_date: moment(end_date),
        token_release_amount: Number(token_release_amount),
    }
}