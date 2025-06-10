/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as CosmosAccesscontrolV1beta1Constants from "./constants.pb"
export type AccessOperation = {
  access_type?: CosmosAccesscontrolV1beta1Constants.AccessType
  resource_type?: CosmosAccesscontrolV1beta1Constants.ResourceType
  identifier_template?: string
}

export type WasmAccessOperation = {
  operation?: AccessOperation
  selector_type?: CosmosAccesscontrolV1beta1Constants.AccessOperationSelectorType
  selector?: string
}

export type WasmContractReference = {
  contract_address?: string
  message_type?: CosmosAccesscontrolV1beta1Constants.WasmMessageSubtype
  message_name?: string
  json_translation_template?: string
}

export type WasmContractReferences = {
  message_name?: string
  contract_references?: WasmContractReference[]
}

export type WasmAccessOperations = {
  message_name?: string
  wasm_operations?: WasmAccessOperation[]
}

export type MessageDependencyMapping = {
  message_key?: string
  access_ops?: AccessOperation[]
  dynamic_enabled?: boolean
}

export type WasmDependencyMapping = {
  base_access_ops?: WasmAccessOperation[]
  query_access_ops?: WasmAccessOperations[]
  execute_access_ops?: WasmAccessOperations[]
  base_contract_references?: WasmContractReference[]
  query_contract_references?: WasmContractReferences[]
  execute_contract_references?: WasmContractReferences[]
  reset_reason?: string
  contract_address?: string
}