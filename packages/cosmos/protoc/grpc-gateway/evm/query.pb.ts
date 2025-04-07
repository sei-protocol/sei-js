/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as fm from "../fetch.pb";
import * as SeiprotocolSeichainEvmEnums from "./enums.pb";
export type QuerySeiAddressByEVMAddressRequest = {
	evm_address?: string;
};

export type QuerySeiAddressByEVMAddressResponse = {
	sei_address?: string;
	associated?: boolean;
};

export type QueryEVMAddressBySeiAddressRequest = {
	sei_address?: string;
};

export type QueryEVMAddressBySeiAddressResponse = {
	evm_address?: string;
	associated?: boolean;
};

export type QueryStaticCallRequest = {
	data?: Uint8Array;
	to?: string;
};

export type QueryStaticCallResponse = {
	data?: Uint8Array;
};

export type QueryPointerRequest = {
	pointer_type?: SeiprotocolSeichainEvmEnums.PointerType;
	pointee?: string;
};

export type QueryPointerResponse = {
	pointer?: string;
	version?: number;
	exists?: boolean;
};

export type QueryPointerVersionRequest = {
	pointer_type?: SeiprotocolSeichainEvmEnums.PointerType;
};

export type QueryPointerVersionResponse = {
	version?: number;
	cw_code_id?: string;
};

export type QueryPointeeRequest = {
	pointer_type?: SeiprotocolSeichainEvmEnums.PointerType;
	pointer?: string;
};

export type QueryPointeeResponse = {
	pointee?: string;
	version?: number;
	exists?: boolean;
};

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
