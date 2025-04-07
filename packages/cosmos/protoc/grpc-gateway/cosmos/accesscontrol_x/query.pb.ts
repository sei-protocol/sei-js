/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as fm from "../../fetch.pb";
import * as CosmosAccesscontrolV1beta1Accesscontrol from "../accesscontrol/accesscontrol.pb";
import * as CosmosAccesscontrol_xV1beta1Genesis from "./genesis.pb";
export type QueryParamsRequest = {};

export type QueryParamsResponse = {
	params?: CosmosAccesscontrol_xV1beta1Genesis.Params;
};

export type ResourceDependencyMappingFromMessageKeyRequest = {
	message_key?: string;
};

export type ResourceDependencyMappingFromMessageKeyResponse = {
	message_dependency_mapping?: CosmosAccesscontrolV1beta1Accesscontrol.MessageDependencyMapping;
};

export type WasmDependencyMappingRequest = {
	contract_address?: string;
};

export type WasmDependencyMappingResponse = {
	wasm_dependency_mapping?: CosmosAccesscontrolV1beta1Accesscontrol.WasmDependencyMapping;
};

export type ListResourceDependencyMappingRequest = {};

export type ListResourceDependencyMappingResponse = {
	message_dependency_mapping_list?: CosmosAccesscontrolV1beta1Accesscontrol.MessageDependencyMapping[];
};

export type ListWasmDependencyMappingRequest = {};

export type ListWasmDependencyMappingResponse = {
	wasm_dependency_mapping_list?: CosmosAccesscontrolV1beta1Accesscontrol.WasmDependencyMapping[];
};

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
