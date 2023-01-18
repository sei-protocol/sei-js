import * as _m0 from 'protobufjs/minimal';
import { DeepPartial, Long } from '@osmonauts/helpers';
export interface OrderEntry {
  price: string;
  quantity: string;
  allocations: Allocation[];
  priceDenom: string;
  assetDenom: string;
}
export interface OrderEntrySDKType {
  price: string;
  quantity: string;
  allocations: AllocationSDKType[];
  priceDenom: string;
  assetDenom: string;
}
export interface Allocation {
  orderId: Long;
  quantity: string;
  account: string;
}
export interface AllocationSDKType {
  orderId: Long;
  quantity: string;
  account: string;
}

function createBaseOrderEntry(): OrderEntry {
  return {
    price: '',
    quantity: '',
    allocations: [],
    priceDenom: '',
    assetDenom: ''
  };
}

export const OrderEntry = {
  encode(message: OrderEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== '') {
      writer.uint32(10).string(message.price);
    }

    if (message.quantity !== '') {
      writer.uint32(18).string(message.quantity);
    }

    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.priceDenom !== '') {
      writer.uint32(34).string(message.priceDenom);
    }

    if (message.assetDenom !== '') {
      writer.uint32(42).string(message.assetDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.quantity = reader.string();
          break;

        case 3:
          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          break;

        case 4:
          message.priceDenom = reader.string();
          break;

        case 5:
          message.assetDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<OrderEntry>): OrderEntry {
    const message = createBaseOrderEntry();
    message.price = object.price ?? '';
    message.quantity = object.quantity ?? '';
    message.allocations = object.allocations?.map(e => Allocation.fromPartial(e)) || [];
    message.priceDenom = object.priceDenom ?? '';
    message.assetDenom = object.assetDenom ?? '';
    return message;
  }

};

function createBaseAllocation(): Allocation {
  return {
    orderId: Long.UZERO,
    quantity: '',
    account: ''
  };
}

export const Allocation = {
  encode(message: Allocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.orderId.isZero()) {
      writer.uint32(8).uint64(message.orderId);
    }

    if (message.quantity !== '') {
      writer.uint32(18).string(message.quantity);
    }

    if (message.account !== '') {
      writer.uint32(26).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orderId = (reader.uint64() as Long);
          break;

        case 2:
          message.quantity = reader.string();
          break;

        case 3:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Allocation>): Allocation {
    const message = createBaseAllocation();
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    message.quantity = object.quantity ?? '';
    message.account = object.account ?? '';
    return message;
  }

};