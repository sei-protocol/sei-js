import { TxRpc } from '../types';
import { BinaryReader } from '../binary';
import {
	MsgTransfer,
	MsgTransferResponse,
	MsgInitializeAccount,
	MsgInitializeAccountResponse,
	MsgDeposit,
	MsgDepositResponse,
	MsgWithdraw,
	MsgWithdrawResponse,
	MsgApplyPendingBalance,
	MsgApplyPendingBalanceResponse,
	MsgCloseAccount,
	MsgCloseAccountResponse
} from './tx';
/** Msg defines the confidential transfers Msg service. */
export interface Msg {
	/** Transfer defines a method for sending coins from one account to another account. */
	transfer(request: MsgTransfer): Promise<MsgTransferResponse>;
	/** InitializeAccount defines a method for creating a new confidential transfers account for some denom. */
	initializeAccount(request: MsgInitializeAccount): Promise<MsgInitializeAccountResponse>;
	/** Deposit defines a method for depositing funds into a confidential transfers account. */
	deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
	/** Withdraw defines a method for withdrawing funds from a confidential transfers account. */
	withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
	/** ApplyPendingBalance defines a method for applying pending balance to an account. */
	applyPendingBalance(request: MsgApplyPendingBalance): Promise<MsgApplyPendingBalanceResponse>;
	/** CloseAccount defines a method for closing an account. */
	closeAccount(request: MsgCloseAccount): Promise<MsgCloseAccountResponse>;
}
export class MsgClientImpl implements Msg {
	private readonly rpc: TxRpc;
	constructor(rpc: TxRpc) {
		this.rpc = rpc;
		this.transfer = this.transfer.bind(this);
		this.initializeAccount = this.initializeAccount.bind(this);
		this.deposit = this.deposit.bind(this);
		this.withdraw = this.withdraw.bind(this);
		this.applyPendingBalance = this.applyPendingBalance.bind(this);
		this.closeAccount = this.closeAccount.bind(this);
	}
	transfer(request: MsgTransfer): Promise<MsgTransferResponse> {
		const data = MsgTransfer.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.confidentialtransfers.Msg', 'Transfer', data);
		return promise.then((data) => MsgTransferResponse.decode(new BinaryReader(data)));
	}
	initializeAccount(request: MsgInitializeAccount): Promise<MsgInitializeAccountResponse> {
		const data = MsgInitializeAccount.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.confidentialtransfers.Msg', 'InitializeAccount', data);
		return promise.then((data) => MsgInitializeAccountResponse.decode(new BinaryReader(data)));
	}
	deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
		const data = MsgDeposit.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.confidentialtransfers.Msg', 'Deposit', data);
		return promise.then((data) => MsgDepositResponse.decode(new BinaryReader(data)));
	}
	withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
		const data = MsgWithdraw.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.confidentialtransfers.Msg', 'Withdraw', data);
		return promise.then((data) => MsgWithdrawResponse.decode(new BinaryReader(data)));
	}
	applyPendingBalance(request: MsgApplyPendingBalance): Promise<MsgApplyPendingBalanceResponse> {
		const data = MsgApplyPendingBalance.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.confidentialtransfers.Msg', 'ApplyPendingBalance', data);
		return promise.then((data) => MsgApplyPendingBalanceResponse.decode(new BinaryReader(data)));
	}
	closeAccount(request: MsgCloseAccount): Promise<MsgCloseAccountResponse> {
		const data = MsgCloseAccount.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.confidentialtransfers.Msg', 'CloseAccount', data);
		return promise.then((data) => MsgCloseAccountResponse.decode(new BinaryReader(data)));
	}
}
