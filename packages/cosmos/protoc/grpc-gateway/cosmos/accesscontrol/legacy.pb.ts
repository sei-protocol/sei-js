/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as CosmosAccesscontrolV1beta1Accesscontrol from "./accesscontrol.pb"
import * as CosmosAccesscontrolV1beta1Constants from "./constants.pb"
export type LegacyAccessOperationWithSelector = {
  operation?: CosmosAccesscontrolV1beta1Accesscontrol.AccessOperation
  selector_type?: CosmosAccesscontrolV1beta1Constants.AccessOperationSelectorType
  selector?: string
}

export type LegacyWasmDependencyMapping = {
  enabled?: boolean
  access_ops?: LegacyAccessOperationWithSelector[]
  reset_reason?: string
  contract_address?: string
}