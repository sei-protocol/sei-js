import { OrderStatus, OrderStatusSDKType, OrderType, OrderTypeSDKType, PositionDirection, PositionDirectionSDKType, CancellationInitiator, CancellationInitiatorSDKType } from './enums';
import * as _m0 from 'protobufjs/minimal';
import { Long, DeepPartial } from '@osmonauts/helpers';
export interface Order {
  id?: Long;
  status?: OrderStatus;
  account?: string;
  contractAddr?: string;
  price: string;
  quantity: string;
  priceDenom: string;
  assetDenom: string;
  orderType: OrderType;
  positionDirection: PositionDirection;
  data: string;
  statusDescription: string;
}
export interface OrderSDKType {
  id?: Long;
  status?: OrderStatusSDKType;
  account?: string;
  contractAddr?: string;
  price: string;
  quantity: string;
  priceDenom: string;
  assetDenom: string;
  orderType: OrderTypeSDKType;
  positionDirection: PositionDirectionSDKType;
  data: string;
  statusDescription: string;
}
export interface Cancellation {
  id: Long;
  initiator: CancellationInitiator;
  creator?: string;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  positionDirection: PositionDirection;
  price: string;
}
export interface CancellationSDKType {
  id: Long;
  initiator: CancellationInitiatorSDKType;
  creator?: string;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  positionDirection: PositionDirectionSDKType;
  price: string;
}
export interface ActiveOrders {
  ids: Long[];
}
export interface ActiveOrdersSDKType {
  ids: Long[];
}

function createBaseOrder(): Order {
  return {
    id: undefined,
    status: undefined,
    account: undefined,
    contractAddr: undefined,
    price: '',
    quantity: '',
    priceDenom: '',
    assetDenom: '',
    orderType: 0,
    positionDirection: 0,
    data: '',
    statusDescription: ''
  };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.status !== undefined) {
      writer.uint32(16).int32(message.status);
    }

    if (message.account !== undefined) {
      writer.uint32(26).string(message.account);
    }

    if (message.contractAddr !== undefined) {
      writer.uint32(34).string(message.contractAddr);
    }

    if (message.price !== '') {
      writer.uint32(42).string(message.price);
    }

    if (message.quantity !== '') {
      writer.uint32(50).string(message.quantity);
    }

    if (message.priceDenom !== '') {
      writer.uint32(58).string(message.priceDenom);
    }

    if (message.assetDenom !== '') {
      writer.uint32(66).string(message.assetDenom);
    }

    if (message.orderType !== 0) {
      writer.uint32(72).int32(message.orderType);
    }

    if (message.positionDirection !== 0) {
      writer.uint32(80).int32(message.positionDirection);
    }

    if (message.data !== '') {
      writer.uint32(90).string(message.data);
    }

    if (message.statusDescription !== '') {
      writer.uint32(98).string(message.statusDescription);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.status = (reader.int32() as any);
          break;

        case 3:
          message.account = reader.string();
          break;

        case 4:
          message.contractAddr = reader.string();
          break;

        case 5:
          message.price = reader.string();
          break;

        case 6:
          message.quantity = reader.string();
          break;

        case 7:
          message.priceDenom = reader.string();
          break;

        case 8:
          message.assetDenom = reader.string();
          break;

        case 9:
          message.orderType = (reader.int32() as any);
          break;

        case 10:
          message.positionDirection = (reader.int32() as any);
          break;

        case 11:
          message.data = reader.string();
          break;

        case 12:
          message.statusDescription = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : undefined;
    message.status = object.status ?? undefined;
    message.account = object.account ?? undefined;
    message.contractAddr = object.contractAddr ?? undefined;
    message.price = object.price ?? '';
    message.quantity = object.quantity ?? '';
    message.priceDenom = object.priceDenom ?? '';
    message.assetDenom = object.assetDenom ?? '';
    message.orderType = object.orderType ?? 0;
    message.positionDirection = object.positionDirection ?? 0;
    message.data = object.data ?? '';
    message.statusDescription = object.statusDescription ?? '';
    return message;
  }

};

function createBaseCancellation(): Cancellation {
  return {
    id: Long.UZERO,
    initiator: 0,
    creator: undefined,
    contractAddr: '',
    priceDenom: '',
    assetDenom: '',
    positionDirection: 0,
    price: ''
  };
}

export const Cancellation = {
  encode(message: Cancellation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.initiator !== 0) {
      writer.uint32(16).int32(message.initiator);
    }

    if (message.creator !== undefined) {
      writer.uint32(26).string(message.creator);
    }

    if (message.contractAddr !== '') {
      writer.uint32(34).string(message.contractAddr);
    }

    if (message.priceDenom !== '') {
      writer.uint32(42).string(message.priceDenom);
    }

    if (message.assetDenom !== '') {
      writer.uint32(50).string(message.assetDenom);
    }

    if (message.positionDirection !== 0) {
      writer.uint32(56).int32(message.positionDirection);
    }

    if (message.price !== '') {
      writer.uint32(66).string(message.price);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cancellation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancellation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.initiator = (reader.int32() as any);
          break;

        case 3:
          message.creator = reader.string();
          break;

        case 4:
          message.contractAddr = reader.string();
          break;

        case 5:
          message.priceDenom = reader.string();
          break;

        case 6:
          message.assetDenom = reader.string();
          break;

        case 7:
          message.positionDirection = (reader.int32() as any);
          break;

        case 8:
          message.price = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Cancellation>): Cancellation {
    const message = createBaseCancellation();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.initiator = object.initiator ?? 0;
    message.creator = object.creator ?? undefined;
    message.contractAddr = object.contractAddr ?? '';
    message.priceDenom = object.priceDenom ?? '';
    message.assetDenom = object.assetDenom ?? '';
    message.positionDirection = object.positionDirection ?? 0;
    message.price = object.price ?? '';
    return message;
  }

};

function createBaseActiveOrders(): ActiveOrders {
  return {
    ids: []
  };
}

export const ActiveOrders = {
  encode(message: ActiveOrders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.ids) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveOrders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveOrders();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ActiveOrders>): ActiveOrders {
    const message = createBaseActiveOrders();
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};