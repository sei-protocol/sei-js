/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as CosmosBaseV1beta1Coin from "../cosmos/base/v1beta1/coin.pb"
import * as fm from "../fetch.pb"
import * as GoogleProtobufAny from "../google/protobuf/any.pb"
import * as SeiprotocolSeichainEvmEnums from "./enums.pb"
import * as SeiprotocolSeichainEvmReceipt from "./receipt.pb"
export type MsgEVMTransaction = {
  data?: GoogleProtobufAny.Any
  derived?: Uint8Array
}

export type MsgEVMTransactionResponse = {
  gas_used?: string
  vm_error?: string
  return_data?: Uint8Array
  hash?: string
  logs?: SeiprotocolSeichainEvmReceipt.Log[]
}

export type MsgInternalEVMCall = {
  sender?: string
  value?: string
  to?: string
  data?: Uint8Array
}

export type MsgInternalEVMCallResponse = {
}

export type MsgInternalEVMDelegateCall = {
  sender?: string
  codeHash?: Uint8Array
  to?: string
  data?: Uint8Array
  fromContract?: string
}

export type MsgInternalEVMDelegateCallResponse = {
}

export type MsgSend = {
  from_address?: string
  to_address?: string
  amount?: CosmosBaseV1beta1Coin.Coin[]
}

export type MsgSendResponse = {
}

export type MsgRegisterPointer = {
  sender?: string
  pointer_type?: SeiprotocolSeichainEvmEnums.PointerType
  erc_address?: string
}

export type MsgRegisterPointerResponse = {
  pointer_address?: string
}

export type MsgAssociateContractAddress = {
  sender?: string
  address?: string
}

export type MsgAssociateContractAddressResponse = {
}

export type MsgAssociate = {
  sender?: string
  custom_message?: string
}

export type MsgAssociateResponse = {
}

export class Msg {
  static EVMTransaction(req: MsgEVMTransaction, initReq?: fm.InitReq): Promise<MsgEVMTransactionResponse> {
    return fm.fetchReq<MsgEVMTransaction, MsgEVMTransactionResponse>(`/seiprotocol.seichain.evm.Msg/EVMTransaction`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Send(req: MsgSend, initReq?: fm.InitReq): Promise<MsgSendResponse> {
    return fm.fetchReq<MsgSend, MsgSendResponse>(`/seiprotocol.seichain.evm.Msg/Send`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RegisterPointer(req: MsgRegisterPointer, initReq?: fm.InitReq): Promise<MsgRegisterPointerResponse> {
    return fm.fetchReq<MsgRegisterPointer, MsgRegisterPointerResponse>(`/seiprotocol.seichain.evm.Msg/RegisterPointer`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static AssociateContractAddress(req: MsgAssociateContractAddress, initReq?: fm.InitReq): Promise<MsgAssociateContractAddressResponse> {
    return fm.fetchReq<MsgAssociateContractAddress, MsgAssociateContractAddressResponse>(`/seiprotocol.seichain.evm.Msg/AssociateContractAddress`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Associate(req: MsgAssociate, initReq?: fm.InitReq): Promise<MsgAssociateResponse> {
    return fm.fetchReq<MsgAssociate, MsgAssociateResponse>(`/seiprotocol.seichain.evm.Msg/Associate`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}