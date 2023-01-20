import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AssetIBCInfo {
  sourceChannel: string;
  dstChannel: string;
  sourceDenom: string;
  sourceChainID: string;
}
export interface AssetIBCInfoSDKType {
  sourceChannel: string;
  dstChannel: string;
  sourceDenom: string;
  sourceChainID: string;
}
export interface AssetMetadata {
  ibcInfo: AssetIBCInfo;
  /** Ex: cw20, ics20, erc20 */

  typeAsset: string;
  metadata: Metadata;
}
export interface AssetMetadataSDKType {
  ibcInfo: AssetIBCInfoSDKType;
  /** Ex: cw20, ics20, erc20 */

  type_asset: string;
  metadata: MetadataSDKType;
}

function createBaseAssetIBCInfo(): AssetIBCInfo {
  return {
    sourceChannel: "",
    dstChannel: "",
    sourceDenom: "",
    sourceChainID: ""
  };
}

export const AssetIBCInfo = {
  encode(message: AssetIBCInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceChannel !== "") {
      writer.uint32(10).string(message.sourceChannel);
    }

    if (message.dstChannel !== "") {
      writer.uint32(18).string(message.dstChannel);
    }

    if (message.sourceDenom !== "") {
      writer.uint32(26).string(message.sourceDenom);
    }

    if (message.sourceChainID !== "") {
      writer.uint32(34).string(message.sourceChainID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetIBCInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetIBCInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sourceChannel = reader.string();
          break;

        case 2:
          message.dstChannel = reader.string();
          break;

        case 3:
          message.sourceDenom = reader.string();
          break;

        case 4:
          message.sourceChainID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AssetIBCInfo>): AssetIBCInfo {
    const message = createBaseAssetIBCInfo();
    message.sourceChannel = object.sourceChannel ?? "";
    message.dstChannel = object.dstChannel ?? "";
    message.sourceDenom = object.sourceDenom ?? "";
    message.sourceChainID = object.sourceChainID ?? "";
    return message;
  }

};

function createBaseAssetMetadata(): AssetMetadata {
  return {
    ibcInfo: undefined,
    typeAsset: "",
    metadata: undefined
  };
}

export const AssetMetadata = {
  encode(message: AssetMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ibcInfo !== undefined) {
      AssetIBCInfo.encode(message.ibcInfo, writer.uint32(10).fork()).ldelim();
    }

    if (message.typeAsset !== "") {
      writer.uint32(18).string(message.typeAsset);
    }

    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMetadata();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ibcInfo = AssetIBCInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.typeAsset = reader.string();
          break;

        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AssetMetadata>): AssetMetadata {
    const message = createBaseAssetMetadata();
    message.ibcInfo = object.ibcInfo !== undefined && object.ibcInfo !== null ? AssetIBCInfo.fromPartial(object.ibcInfo) : undefined;
    message.typeAsset = object.typeAsset ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};