import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface AddCreatorsToDenomFeeWhitelistProposal {
  title: string;
  description: string;
  creatorList: string[];
}
export interface AddCreatorsToDenomFeeWhitelistProposalSDKType {
  title: string;
  description: string;
  creatorList: string[];
}

function createBaseAddCreatorsToDenomFeeWhitelistProposal(): AddCreatorsToDenomFeeWhitelistProposal {
  return {
    title: "",
    description: "",
    creatorList: []
  };
}

export const AddCreatorsToDenomFeeWhitelistProposal = {
  encode(message: AddCreatorsToDenomFeeWhitelistProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    for (const v of message.creatorList) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddCreatorsToDenomFeeWhitelistProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddCreatorsToDenomFeeWhitelistProposal();

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
          message.creatorList.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AddCreatorsToDenomFeeWhitelistProposal>): AddCreatorsToDenomFeeWhitelistProposal {
    const message = createBaseAddCreatorsToDenomFeeWhitelistProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.creatorList = object.creatorList?.map(e => e) || [];
    return message;
  }

};