import { describe, expect, test } from 'bun:test';
import {
	advisoriesFixedUpstream,
	advisoriesOutsideWaiver,
	describeAuditFindings,
	ghsaIdsIn,
	npmAuditFailureReason,
	npmReportedAdvisories
} from './consumer-audit.js';

describe('npm audit result validity', () => {
	test('accepts a real report, whether or not it found anything', () => {
		expect(npmAuditFailureReason({ metadata: { vulnerabilities: { total: 0 } } })).toBeUndefined();
		expect(npmAuditFailureReason({ metadata: { vulnerabilities: { total: 9 } } })).toBeUndefined();
	});

	// `npm audit --json` prints this body and exits non-zero, so a caller that
	// allows the non-zero exit must not read it as a clean result.
	test('rejects an audit that never ran, naming the npm error', () => {
		const reason = npmAuditFailureReason({
			error: { code: 'ENOAUDIT', summary: 'Your configured registry does not support audit requests' }
		});
		expect(reason).toContain('audit did not run');
		expect(reason).toContain('ENOAUDIT');
		expect(reason).toContain('does not support audit requests');
	});

	test('rejects an error payload with no detail rather than trusting it', () => {
		expect(npmAuditFailureReason({ error: {} })).toBe('audit did not run: unknown npm error');
	});

	test('rejects a report with no vulnerability count', () => {
		expect(npmAuditFailureReason({})).toContain('did not produce a result');
		expect(npmAuditFailureReason({ metadata: {} })).toContain('did not produce a result');
		// An empty `vulnerabilities` map is not a substitute for the count: the
		// error payload also has none, which is what made the two look alike.
		expect(npmAuditFailureReason({ vulnerabilities: {} })).toContain('did not produce a result');
	});
});

describe('npm advisory extraction', () => {
	const sharpReport = {
		metadata: { vulnerabilities: { total: 2 } },
		vulnerabilities: {
			'@dynamic-labs/iconic': { via: ['sharp'] },
			sharp: {
				via: [
					{
						title: 'sharp: Vulnerabilities in libheif: GHSA-g89c-p67h-r497 and GHSA-2jg2-4ch7-h545',
						url: 'https://github.com/advisories/GHSA-rgj7-g3m4-5g8c'
					}
				]
			}
		}
	};

	// The title names two other advisories; only the advisory's own id counts.
	test('reads ids from the advisory url, not from titles that cite others', () => {
		expect(npmReportedAdvisories(sharpReport)).toEqual({ ids: ['GHSA-rgj7-g3m4-5g8c'], withoutId: [] });
	});

	test('deduplicates one advisory reported against several packages', () => {
		const shared = { url: 'https://github.com/advisories/GHSA-528h-pc64-c93x' };
		expect(
			npmReportedAdvisories({
				vulnerabilities: { jayson: { via: [shared] }, 'stream-json': { via: [shared] } }
			}).ids
		).toEqual(['GHSA-528h-pc64-c93x']);
	});

	test('separates findings with no usable id so they cannot match a waiver', () => {
		const { ids, withoutId } = npmReportedAdvisories({
			vulnerabilities: { mystery: { via: [{ url: 'https://example.test/advisory' }, {}] } }
		});
		expect(ids).toEqual([]);
		expect(withoutId).toEqual([{ url: 'https://example.test/advisory' }, {}]);
	});

	test('reports nothing for a clean audit', () => {
		expect(npmReportedAdvisories({ metadata: { vulnerabilities: { total: 0 } } })).toEqual({ ids: [], withoutId: [] });
	});

	test('names each vulnerable package with its advisory for the failure message', () => {
		expect(describeAuditFindings(sharpReport)).toEqual(['@dynamic-labs/iconic', 'sharp (https://github.com/advisories/GHSA-rgj7-g3m4-5g8c)']);
	});
});

describe('waiver comparison', () => {
	const accepted = ['GHSA-378v-28hj-76wf', 'GHSA-528h-pc64-c93x'];

	test('passes advisories inside the waiver, case-insensitively', () => {
		expect(advisoriesOutsideWaiver(['ghsa-528h-pc64-c93x'], accepted)).toEqual([]);
		expect(advisoriesOutsideWaiver(['GHSA-378V-28HJ-76WF'], accepted)).toEqual([]);
	});

	test('surfaces any advisory the waiver does not accept', () => {
		expect(advisoriesOutsideWaiver(['GHSA-528h-pc64-c93x', 'GHSA-rgj7-g3m4-5g8c'], accepted)).toEqual(['ghsa-rgj7-g3m4-5g8c']);
	});

	test('treats an empty waiver as accepting nothing', () => {
		expect(advisoriesOutsideWaiver(['GHSA-528h-pc64-c93x'], [])).toEqual(['ghsa-528h-pc64-c93x']);
	});

	// Subset semantics: a withdrawn or upstream-fixed advisory reports progress
	// instead of failing, so unrelated pull requests stay green.
	test('reports accepted advisories that stopped being reported', () => {
		expect(advisoriesFixedUpstream(['GHSA-528h-pc64-c93x'], accepted)).toEqual(['GHSA-378v-28hj-76wf']);
		expect(advisoriesFixedUpstream([], accepted)).toEqual(accepted);
		expect(advisoriesFixedUpstream(accepted, accepted)).toEqual([]);
	});
});

describe('bun advisory extraction', () => {
	test('finds every GHSA id in a flat Bun finding', () => {
		expect(ghsaIdsIn({ url: 'https://github.com/advisories/GHSA-96hv-2xvq-fx4p', severity: 'high' })).toEqual(['GHSA-96hv-2xvq-fx4p']);
		expect(ghsaIdsIn({ severity: 'moderate' })).toEqual([]);
	});
});
