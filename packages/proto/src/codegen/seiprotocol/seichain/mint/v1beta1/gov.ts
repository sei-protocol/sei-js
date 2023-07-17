import { Minter, MinterSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../helpers";
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposal {
  title: string;
  description: string;
  minter: Minter;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposalSDKType {
  title: string;
  description: string;
  minter: MinterSDKType;
}
function createBaseUpdateMinterProposal(): UpdateMinterProposal {
  return {
    title: "",
    description: "",
    minter: Minter.fromPartial({})
  };
}
export const UpdateMinterProposal = {
  encode(message: UpdateMinterProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMinterProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMinterProposal();
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
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateMinterProposal>): UpdateMinterProposal {
    const message = createBaseUpdateMinterProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    return message;
  }
};