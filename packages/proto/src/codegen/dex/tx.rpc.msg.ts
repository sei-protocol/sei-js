import { TxRpc } from '../types';
import { BinaryReader } from '../binary';
import {
	MsgPlaceOrders,
	MsgPlaceOrdersResponse,
	MsgCancelOrders,
	MsgCancelOrdersResponse,
	MsgRegisterContract,
	MsgRegisterContractResponse,
	MsgContractDepositRent,
	MsgContractDepositRentResponse,
	MsgUnregisterContract,
	MsgUnregisterContractResponse,
	MsgRegisterPairs,
	MsgRegisterPairsResponse,
	MsgUpdatePriceTickSize,
	MsgUpdateTickSizeResponse,
	MsgUpdateQuantityTickSize,
	MsgUnsuspendContract,
	MsgUnsuspendContractResponse
} from './tx';
/** Msg defines the Msg service. */
export interface Msg {
	placeOrders(request: MsgPlaceOrders): Promise<MsgPlaceOrdersResponse>;
	cancelOrders(request: MsgCancelOrders): Promise<MsgCancelOrdersResponse>;
	registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
	contractDepositRent(request: MsgContractDepositRent): Promise<MsgContractDepositRentResponse>;
	unregisterContract(request: MsgUnregisterContract): Promise<MsgUnregisterContractResponse>;
	registerPairs(request: MsgRegisterPairs): Promise<MsgRegisterPairsResponse>;
	updatePriceTickSize(request: MsgUpdatePriceTickSize): Promise<MsgUpdateTickSizeResponse>;
	updateQuantityTickSize(request: MsgUpdateQuantityTickSize): Promise<MsgUpdateTickSizeResponse>;
	unsuspendContract(request: MsgUnsuspendContract): Promise<MsgUnsuspendContractResponse>;
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc;
	constructor(rpc: TxRpc) {
		this.rpc = rpc;
		this.placeOrders = this.placeOrders.bind(this);
		this.cancelOrders = this.cancelOrders.bind(this);
		this.registerContract = this.registerContract.bind(this);
		this.contractDepositRent = this.contractDepositRent.bind(this);
		this.unregisterContract = this.unregisterContract.bind(this);
		this.registerPairs = this.registerPairs.bind(this);
		this.updatePriceTickSize = this.updatePriceTickSize.bind(this);
		this.updateQuantityTickSize = this.updateQuantityTickSize.bind(this);
		this.unsuspendContract = this.unsuspendContract.bind(this);
	}
	placeOrders(request: MsgPlaceOrders): Promise<MsgPlaceOrdersResponse> {
		const data = MsgPlaceOrders.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'PlaceOrders', data);
		return promise.then((data) => MsgPlaceOrdersResponse.decode(new BinaryReader(data)));
	}
	cancelOrders(request: MsgCancelOrders): Promise<MsgCancelOrdersResponse> {
		const data = MsgCancelOrders.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'CancelOrders', data);
		return promise.then((data) => MsgCancelOrdersResponse.decode(new BinaryReader(data)));
	}
	registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse> {
		const data = MsgRegisterContract.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'RegisterContract', data);
		return promise.then((data) => MsgRegisterContractResponse.decode(new BinaryReader(data)));
	}
	contractDepositRent(request: MsgContractDepositRent): Promise<MsgContractDepositRentResponse> {
		const data = MsgContractDepositRent.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'ContractDepositRent', data);
		return promise.then((data) => MsgContractDepositRentResponse.decode(new BinaryReader(data)));
	}
	unregisterContract(request: MsgUnregisterContract): Promise<MsgUnregisterContractResponse> {
		const data = MsgUnregisterContract.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'UnregisterContract', data);
		return promise.then((data) => MsgUnregisterContractResponse.decode(new BinaryReader(data)));
	}
	registerPairs(request: MsgRegisterPairs): Promise<MsgRegisterPairsResponse> {
		const data = MsgRegisterPairs.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'RegisterPairs', data);
		return promise.then((data) => MsgRegisterPairsResponse.decode(new BinaryReader(data)));
	}
	updatePriceTickSize(request: MsgUpdatePriceTickSize): Promise<MsgUpdateTickSizeResponse> {
		const data = MsgUpdatePriceTickSize.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'UpdatePriceTickSize', data);
		return promise.then((data) => MsgUpdateTickSizeResponse.decode(new BinaryReader(data)));
	}
	updateQuantityTickSize(request: MsgUpdateQuantityTickSize): Promise<MsgUpdateTickSizeResponse> {
		const data = MsgUpdateQuantityTickSize.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'UpdateQuantityTickSize', data);
		return promise.then((data) => MsgUpdateTickSizeResponse.decode(new BinaryReader(data)));
	}
	unsuspendContract(request: MsgUnsuspendContract): Promise<MsgUnsuspendContractResponse> {
		const data = MsgUnsuspendContract.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Msg', 'UnsuspendContract', data);
		return promise.then((data) => MsgUnsuspendContractResponse.decode(new BinaryReader(data)));
	}
}
