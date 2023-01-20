import { BatchContractPair, BatchContractPairSDKType } from "./pair";
import { TickSize, TickSizeSDKType } from "./tick_size";
import { AssetMetadata, AssetMetadataSDKType } from "./asset_list";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * RegisterPairsProposal is a gov Content type for adding a new whitelisted token
 * pair to the dex module. It must specify a list of contract addresses and their respective
 * token pairs to be registered.
 */

export interface RegisterPairsProposal {
  title: string;
  description: string;
  batchcontractpair: BatchContractPair[];
}
/**
 * RegisterPairsProposal is a gov Content type for adding a new whitelisted token
 * pair to the dex module. It must specify a list of contract addresses and their respective
 * token pairs to be registered.
 */

export interface RegisterPairsProposalSDKType {
  title: string;
  description: string;
  batchcontractpair: BatchContractPairSDKType[];
}
export interface UpdateTickSizeProposal {
  title: string;
  description: string;
  tickSizeList: TickSize[];
}
export interface UpdateTickSizeProposalSDKType {
  title: string;
  description: string;
  tickSizeList: TickSizeSDKType[];
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */

export interface AddAssetMetadataProposal {
  title: string;
  description: string;
  assetList: AssetMetadata[];
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */

export interface AddAssetMetadataProposalSDKType {
  title: string;
  description: string;
  assetList: AssetMetadataSDKType[];
}

function createBaseRegisterPairsProposal(): RegisterPairsProposal {
  return {
    title: "",
    description: "",
    batchcontractpair: []
  };
}

export const RegisterPairsProposal = {
  encode(message: RegisterPairsProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.batchcontractpair) {
      BatchContractPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPairsProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterPairsProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.batchcontractpair.push(BatchContractPair.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RegisterPairsProposal>): RegisterPairsProposal {
    const message = createBaseRegisterPairsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.batchcontractpair = object.batchcontractpair?.map(e => BatchContractPair.fromPartial(e)) || [];
    return message;
  }

};

function createBaseUpdateTickSizeProposal(): UpdateTickSizeProposal {
  return {
    title: "",
    description: "",
    tickSizeList: []
  };
}

export const UpdateTickSizeProposal = {
  encode(message: UpdateTickSizeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.tickSizeList) {
      TickSize.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTickSizeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateTickSizeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.tickSizeList.push(TickSize.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateTickSizeProposal>): UpdateTickSizeProposal {
    const message = createBaseUpdateTickSizeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.tickSizeList = object.tickSizeList?.map(e => TickSize.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAddAssetMetadataProposal(): AddAssetMetadataProposal {
  return {
    title: "",
    description: "",
    assetList: []
  };
}

export const AddAssetMetadataProposal = {
  encode(message: AddAssetMetadataProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.assetList) {
      AssetMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddAssetMetadataProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetMetadataProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.assetList.push(AssetMetadata.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AddAssetMetadataProposal>): AddAssetMetadataProposal {
    const message = createBaseAddAssetMetadataProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.assetList = object.assetList?.map(e => AssetMetadata.fromPartial(e)) || [];
    return message;
  }

};