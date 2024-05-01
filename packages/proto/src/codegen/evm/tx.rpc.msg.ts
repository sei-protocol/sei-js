import { TxRpc } from '../types';
import { BinaryReader } from '../binary';
import { MsgEVMTransaction, MsgEVMTransactionResponse, MsgSend, MsgSendResponse, MsgRegisterPointer, MsgRegisterPointerResponse } from './tx';
export interface Msg {
	eVMTransaction(request: MsgEVMTransaction): Promise<MsgEVMTransactionResponse>;
	send(request: MsgSend): Promise<MsgSendResponse>;
	registerPointer(request: MsgRegisterPointer): Promise<MsgRegisterPointerResponse>;
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc;
	constructor(rpc: TxRpc) {
		this.rpc = rpc;
		this.eVMTransaction = this.eVMTransaction.bind(this);
		this.send = this.send.bind(this);
		this.registerPointer = this.registerPointer.bind(this);
	}
	eVMTransaction(request: MsgEVMTransaction): Promise<MsgEVMTransactionResponse> {
		const data = MsgEVMTransaction.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.evm.Msg', 'EVMTransaction', data);
		return promise.then((data) => MsgEVMTransactionResponse.decode(new BinaryReader(data)));
	}
	send(request: MsgSend): Promise<MsgSendResponse> {
		const data = MsgSend.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.evm.Msg', 'Send', data);
		return promise.then((data) => MsgSendResponse.decode(new BinaryReader(data)));
	}
	registerPointer(request: MsgRegisterPointer): Promise<MsgRegisterPointerResponse> {
		const data = MsgRegisterPointer.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.evm.Msg', 'RegisterPointer', data);
		return promise.then((data) => MsgRegisterPointerResponse.decode(new BinaryReader(data)));
	}
}
