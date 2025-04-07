import * as fm from "../../../fetch";

import type {
	QueryAllEvidenceRequest,
	QueryAllEvidenceResponse,
	QueryEvidenceRequest,
	QueryEvidenceResponse
} from "../../../../types/cosmos/evidence/v1beta1/query.ts";

export class Query {
	static Evidence(req: QueryEvidenceRequest, initReq?: fm.InitReq): Promise<QueryEvidenceResponse> {
		return fm.fetchReq<QueryEvidenceRequest, QueryEvidenceResponse>(
			`/cosmos/evidence/v1beta1/evidence/${req["evidence_hash"]}?${fm.renderURLSearchParams(req, ["evidence_hash"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static AllEvidence(req: QueryAllEvidenceRequest, initReq?: fm.InitReq): Promise<QueryAllEvidenceResponse> {
		return fm.fetchReq<QueryAllEvidenceRequest, QueryAllEvidenceResponse>(`/cosmos/evidence/v1beta1/evidence?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
}
