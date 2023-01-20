import { Order, OrderSDKType, Cancellation, CancellationSDKType } from "./order";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ContractInfo, ContractInfoSDKType } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgPlaceOrders {
  creator: string;
  orders: Order[];
  contractAddr: string;
  funds: Coin[];
}
export interface MsgPlaceOrdersSDKType {
  creator: string;
  orders: OrderSDKType[];
  contractAddr: string;
  funds: CoinSDKType[];
}
export interface MsgPlaceOrdersResponse {
  orderIds: Long[];
}
export interface MsgPlaceOrdersResponseSDKType {
  orderIds: Long[];
}
export interface MsgCancelOrders {
  creator: string;
  cancellations: Cancellation[];
  contractAddr: string;
}
export interface MsgCancelOrdersSDKType {
  creator: string;
  cancellations: CancellationSDKType[];
  contractAddr: string;
}
export interface MsgCancelOrdersResponse {}
export interface MsgCancelOrdersResponseSDKType {}
export interface MsgRegisterContract {
  creator: string;
  contract: ContractInfo;
}
export interface MsgRegisterContractSDKType {
  creator: string;
  contract: ContractInfoSDKType;
}
export interface MsgRegisterContractResponse {}
export interface MsgRegisterContractResponseSDKType {}

function createBaseMsgPlaceOrders(): MsgPlaceOrders {
  return {
    creator: "",
    orders: [],
    contractAddr: "",
    funds: []
  };
}

export const MsgPlaceOrders = {
  encode(message: MsgPlaceOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;

        case 3:
          message.contractAddr = reader.string();
          break;

        case 4:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgPlaceOrders>): MsgPlaceOrders {
    const message = createBaseMsgPlaceOrders();
    message.creator = object.creator ?? "";
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.contractAddr = object.contractAddr ?? "";
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgPlaceOrdersResponse(): MsgPlaceOrdersResponse {
  return {
    orderIds: []
  };
}

export const MsgPlaceOrdersResponse = {
  encode(message: MsgPlaceOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.orderIds) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPlaceOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.orderIds.push((reader.uint64() as Long));
            }
          } else {
            message.orderIds.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgPlaceOrdersResponse>): MsgPlaceOrdersResponse {
    const message = createBaseMsgPlaceOrdersResponse();
    message.orderIds = object.orderIds?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseMsgCancelOrders(): MsgCancelOrders {
  return {
    creator: "",
    cancellations: [],
    contractAddr: ""
  };
}

export const MsgCancelOrders = {
  encode(message: MsgCancelOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    for (const v of message.cancellations) {
      Cancellation.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.cancellations.push(Cancellation.decode(reader, reader.uint32()));
          break;

        case 3:
          message.contractAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCancelOrders>): MsgCancelOrders {
    const message = createBaseMsgCancelOrders();
    message.creator = object.creator ?? "";
    message.cancellations = object.cancellations?.map(e => Cancellation.fromPartial(e)) || [];
    message.contractAddr = object.contractAddr ?? "";
    return message;
  }

};

function createBaseMsgCancelOrdersResponse(): MsgCancelOrdersResponse {
  return {};
}

export const MsgCancelOrdersResponse = {
  encode(_: MsgCancelOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgCancelOrdersResponse>): MsgCancelOrdersResponse {
    const message = createBaseMsgCancelOrdersResponse();
    return message;
  }

};

function createBaseMsgRegisterContract(): MsgRegisterContract {
  return {
    creator: "",
    contract: undefined
  };
}

export const MsgRegisterContract = {
  encode(message: MsgRegisterContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.contract !== undefined) {
      ContractInfo.encode(message.contract, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.contract = ContractInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRegisterContract>): MsgRegisterContract {
    const message = createBaseMsgRegisterContract();
    message.creator = object.creator ?? "";
    message.contract = object.contract !== undefined && object.contract !== null ? ContractInfo.fromPartial(object.contract) : undefined;
    return message;
  }

};

function createBaseMsgRegisterContractResponse(): MsgRegisterContractResponse {
  return {};
}

export const MsgRegisterContractResponse = {
  encode(_: MsgRegisterContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContractResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterContractResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRegisterContractResponse>): MsgRegisterContractResponse {
    const message = createBaseMsgRegisterContractResponse();
    return message;
  }

};