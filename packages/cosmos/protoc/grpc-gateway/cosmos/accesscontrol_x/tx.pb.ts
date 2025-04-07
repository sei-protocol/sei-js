/* eslint-disable */
// @ts-nocheck
/*
 * This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
 */

import * as fm from "../../fetch.pb";
import * as CosmosAccesscontrolV1beta1Accesscontrol from "../accesscontrol/accesscontrol.pb";
export type RegisterWasmDependencyJSONFile = {
	wasm_dependency_mapping?: CosmosAccesscontrolV1beta1Accesscontrol.WasmDependencyMapping;
};

export type MsgRegisterWasmDependency = {
	from_address?: string;
	wasm_dependency_mapping?: CosmosAccesscontrolV1beta1Accesscontrol.WasmDependencyMapping;
};

export type MsgRegisterWasmDependencyResponse = {};

export class Msg {
	static RegisterWasmDependency(req: MsgRegisterWasmDependency, initReq?: fm.InitReq): Promise<MsgRegisterWasmDependencyResponse> {
		return fm.fetchReq<MsgRegisterWasmDependency, MsgRegisterWasmDependencyResponse>(`/cosmos.accesscontrol_x.v1beta1.Msg/RegisterWasmDependency`, {
			...initReq,
			method: "POST",
			body: JSON.stringify(req, fm.replacer)
		});
	}
}
