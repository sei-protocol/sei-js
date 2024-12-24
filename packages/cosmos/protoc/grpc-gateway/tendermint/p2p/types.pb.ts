/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
export type ProtocolVersion = {
  p2p?: string
  block?: string
  app?: string
}

export type NodeInfo = {
  protocol_version?: ProtocolVersion
  node_id?: string
  listen_addr?: string
  network?: string
  version?: string
  channels?: Uint8Array
  moniker?: string
  other?: NodeInfoOther
}

export type NodeInfoOther = {
  tx_index?: string
  rpc_address?: string
}

export type PeerInfo = {
  id?: string
  address_info?: PeerAddressInfo[]
  last_connected?: GoogleProtobufTimestamp.Timestamp
}

export type PeerAddressInfo = {
  address?: string
  last_dial_success?: GoogleProtobufTimestamp.Timestamp
  last_dial_failure?: GoogleProtobufTimestamp.Timestamp
  dial_failures?: number
}