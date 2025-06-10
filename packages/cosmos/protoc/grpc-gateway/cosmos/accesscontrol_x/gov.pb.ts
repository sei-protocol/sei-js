/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as CosmosAccesscontrolV1beta1Accesscontrol from "../accesscontrol/accesscontrol.pb"
export type MsgUpdateResourceDependencyMappingProposal = {
  title?: string
  description?: string
  message_dependency_mapping?: CosmosAccesscontrolV1beta1Accesscontrol.MessageDependencyMapping[]
}

export type MsgUpdateResourceDependencyMappingProposalJsonFile = {
  title?: string
  description?: string
  deposit?: string
  message_dependency_mapping?: CosmosAccesscontrolV1beta1Accesscontrol.MessageDependencyMapping[]
}

export type MsgUpdateResourceDependencyMappingProposalResponse = {
}

export type MsgUpdateWasmDependencyMappingProposal = {
  title?: string
  description?: string
  contract_address?: string
  wasm_dependency_mapping?: CosmosAccesscontrolV1beta1Accesscontrol.WasmDependencyMapping
}

export type MsgUpdateWasmDependencyMappingProposalJsonFile = {
  title?: string
  description?: string
  deposit?: string
  contract_address?: string
  wasm_dependency_mapping?: CosmosAccesscontrolV1beta1Accesscontrol.WasmDependencyMapping
}