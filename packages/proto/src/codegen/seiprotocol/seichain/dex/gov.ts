import { AssetMetadata, AssetMetadataSDKType } from "./asset_list";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
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