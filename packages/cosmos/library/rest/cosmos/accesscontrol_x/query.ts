import * as fm from "../../fetch";

import type {
	ListResourceDependencyMappingRequest,
	ListResourceDependencyMappingResponse,
	ListWasmDependencyMappingRequest,
	ListWasmDependencyMappingResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	ResourceDependencyMappingFromMessageKeyRequest,
	ResourceDependencyMappingFromMessageKeyResponse,
	WasmDependencyMappingRequest,
	WasmDependencyMappingResponse
} from "../../../types/cosmos/accesscontrol_x/query.ts";

export class Query {
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/cosmos/cosmos-sdk/accesscontrol/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static ResourceDependencyMappingFromMessageKey(
		req: ResourceDependencyMappingFromMessageKeyRequest,
		initReq?: fm.InitReq
	): Promise<ResourceDependencyMappingFromMessageKeyResponse> {
		return fm.fetchReq<ResourceDependencyMappingFromMessageKeyRequest, ResourceDependencyMappingFromMessageKeyResponse>(
			`/cosmos/cosmos-sdk/accesscontrol/resource_dependency_mapping_from_message_key/${req["message_key"]}?${fm.renderURLSearchParams(req, ["message_key"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static ListResourceDependencyMapping(req: ListResourceDependencyMappingRequest, initReq?: fm.InitReq): Promise<ListResourceDependencyMappingResponse> {
		return fm.fetchReq<ListResourceDependencyMappingRequest, ListResourceDependencyMappingResponse>(
			`/cosmos/cosmos-sdk/accesscontrol/list_resource_dependency_mapping?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static WasmDependencyMapping(req: WasmDependencyMappingRequest, initReq?: fm.InitReq): Promise<WasmDependencyMappingResponse> {
		return fm.fetchReq<WasmDependencyMappingRequest, WasmDependencyMappingResponse>(
			`/cosmos/cosmos-sdk/accesscontrol/wasm_dependency_mapping/${req["contract_address"]}?${fm.renderURLSearchParams(req, ["contract_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static ListWasmDependencyMapping(req: ListWasmDependencyMappingRequest, initReq?: fm.InitReq): Promise<ListWasmDependencyMappingResponse> {
		return fm.fetchReq<ListWasmDependencyMappingRequest, ListWasmDependencyMappingResponse>(
			`/cosmos/cosmos-sdk/accesscontrol/list_wasm_dependency_mapping?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
}
