const GHSA_ID = /GHSA-[a-z0-9-]+/i;
const GHSA_IDS = /GHSA-[a-z0-9-]+/gi;

export interface AuditReport {
	error?: { code?: string; summary?: string };
	metadata?: { vulnerabilities?: { total?: number } };
	vulnerabilities?: Record<string, { via?: Array<string | { url?: string }> }>;
}

/** Lists every GHSA id anywhere in a value, for Bun's flat per-package findings. */
export const ghsaIdsIn = (value: unknown) => JSON.stringify(value).match(GHSA_IDS) ?? [];

/**
 * `npm audit` exits non-zero for its own failures as well as for findings, so
 * the exit code alone cannot tell the two apart. An unreachable registry prints
 * `{"error":{"code":"ENOAUDIT"}}`, a body that carries no counts: read as a
 * result it looks like zero findings, turning an audit that never ran into a
 * pass on the gate it was meant to enforce. Returns why the report is unusable,
 * or `undefined` when it is a real audit result.
 */
export const npmAuditFailureReason = (report: AuditReport) => {
	if (report.error) {
		const detail = [report.error.code, report.error.summary].filter(Boolean).join(' ');
		return `audit did not run: ${detail || 'unknown npm error'}`;
	}
	if (typeof report.metadata?.vulnerabilities?.total !== 'number') {
		return 'audit returned no vulnerability count, so it did not produce a result';
	}
	return undefined;
};

/** Names each vulnerable package alongside the advisories it was reported for. */
export const describeAuditFindings = (report: AuditReport) =>
	Object.entries(report.vulnerabilities ?? {})
		.map(([name, entry]) => {
			const urls = (entry.via ?? []).flatMap((via) => (typeof via === 'object' && via.url ? [via.url] : []));
			return urls.length > 0 ? `${name} (${urls.join(', ')})` : name;
		})
		.sort();

/**
 * Reads each id from the advisory's own `url` rather than scanning the whole
 * report: npm advisory titles cite unrelated GHSA ids — sharp's libheif title
 * names two — which a blanket scan would count as separate findings. Advisories
 * carrying no id come back separately, because an unidentifiable finding cannot
 * be matched against a waiver and has to fail instead.
 */
export const npmReportedAdvisories = (report: AuditReport) => {
	const ids: string[] = [];
	const withoutId: Array<{ url?: string }> = [];

	for (const entry of Object.values(report.vulnerabilities ?? {})) {
		for (const via of entry.via ?? []) {
			if (typeof via !== 'object') continue;

			const id = via.url?.match(GHSA_ID)?.[0];
			if (id) ids.push(id);
			else withoutId.push(via);
		}
	}

	return { ids: [...new Set(ids)].sort(), withoutId };
};

const lowercased = (advisories: Iterable<string>) => new Set([...advisories].map((advisory) => advisory.toLowerCase()));

/**
 * Reported advisories that the waiver does not accept. A waiver is a subset
 * check rather than an exact set, so this is the only part that may fail a run:
 * the advisory database changes on its own schedule, and a withdrawn or
 * upstream-fixed advisory must not turn an unrelated pull request red.
 */
export const advisoriesOutsideWaiver = (reported: Iterable<string>, accepted: readonly string[]) => {
	const acceptedIds = lowercased(accepted);
	return [...lowercased(reported)].filter((advisory) => !acceptedIds.has(advisory)).sort();
};

/** Accepted advisories that are no longer reported, so the waiver can narrow. */
export const advisoriesFixedUpstream = (reported: Iterable<string>, accepted: readonly string[]) => {
	const reportedIds = lowercased(reported);
	return accepted.filter((advisory) => !reportedIds.has(advisory.toLowerCase()));
};
