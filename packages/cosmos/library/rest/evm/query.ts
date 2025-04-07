import * as fm from "../fetch";

import type {
	QueryEVMAddressBySeiAddressRequest,
	QueryEVMAddressBySeiAddressResponse,
	QueryPointeeRequest,
	QueryPointeeResponse,
	QueryPointerRequest,
	QueryPointerResponse,
	QueryPointerVersionRequest,
	QueryPointerVersionResponse,
	QuerySeiAddressByEVMAddressRequest,
	QuerySeiAddressByEVMAddressResponse,
	QueryStaticCallRequest,
	QueryStaticCallResponse
} from "../../types/evm/query.ts";

export class Query {
	static SeiAddressByEVMAddress(req: QuerySeiAddressByEVMAddressRequest, initReq?: fm.InitReq): Promise<QuerySeiAddressByEVMAddressResponse> {
		return fm.fetchReq<QuerySeiAddressByEVMAddressRequest, QuerySeiAddressByEVMAddressResponse>(
			`/sei-protocol/seichain/evm/sei_address?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static EVMAddressBySeiAddress(req: QueryEVMAddressBySeiAddressRequest, initReq?: fm.InitReq): Promise<QueryEVMAddressBySeiAddressResponse> {
		return fm.fetchReq<QueryEVMAddressBySeiAddressRequest, QueryEVMAddressBySeiAddressResponse>(
			`/sei-protocol/seichain/evm/evm_address?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static StaticCall(req: QueryStaticCallRequest, initReq?: fm.InitReq): Promise<QueryStaticCallResponse> {
		return fm.fetchReq<QueryStaticCallRequest, QueryStaticCallResponse>(`/sei-protocol/seichain/evm/static_call?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static Pointer(req: QueryPointerRequest, initReq?: fm.InitReq): Promise<QueryPointerResponse> {
		return fm.fetchReq<QueryPointerRequest, QueryPointerResponse>(`/sei-protocol/seichain/evm/pointer?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static PointerVersion(req: QueryPointerVersionRequest, initReq?: fm.InitReq): Promise<QueryPointerVersionResponse> {
		return fm.fetchReq<QueryPointerVersionRequest, QueryPointerVersionResponse>(
			`/sei-protocol/seichain/evm/pointer_version?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static Pointee(req: QueryPointeeRequest, initReq?: fm.InitReq): Promise<QueryPointeeResponse> {
		return fm.fetchReq<QueryPointeeRequest, QueryPointeeResponse>(`/sei-protocol/seichain/evm/pointee?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
}
