import { LCDClient } from '@cosmology/lcd';
import {
	QuerySeiAddressByEVMAddressRequest,
	QuerySeiAddressByEVMAddressResponseSDKType,
	QueryEVMAddressBySeiAddressRequest,
	QueryEVMAddressBySeiAddressResponseSDKType,
	QueryStaticCallRequest,
	QueryStaticCallResponseSDKType,
	QueryPointerRequest,
	QueryPointerResponseSDKType
} from './query';
export class LCDQueryClient {
	req: LCDClient;
	constructor({ requestClient }: { requestClient: LCDClient }) {
		this.req = requestClient;
		this.seiAddressByEVMAddress = this.seiAddressByEVMAddress.bind(this);
		this.eVMAddressBySeiAddress = this.eVMAddressBySeiAddress.bind(this);
		this.staticCall = this.staticCall.bind(this);
		this.pointer = this.pointer.bind(this);
	}
	/* SeiAddressByEVMAddress */
	async seiAddressByEVMAddress(params: QuerySeiAddressByEVMAddressRequest): Promise<QuerySeiAddressByEVMAddressResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.evmAddress !== 'undefined') {
			options.params.evm_address = params.evmAddress;
		}
		const endpoint = `sei-protocol/seichain/evm/sei_address`;
		return await this.req.get<QuerySeiAddressByEVMAddressResponseSDKType>(endpoint, options);
	}
	/* EVMAddressBySeiAddress */
	async eVMAddressBySeiAddress(params: QueryEVMAddressBySeiAddressRequest): Promise<QueryEVMAddressBySeiAddressResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.seiAddress !== 'undefined') {
			options.params.sei_address = params.seiAddress;
		}
		const endpoint = `sei-protocol/seichain/evm/evm_address`;
		return await this.req.get<QueryEVMAddressBySeiAddressResponseSDKType>(endpoint, options);
	}
	/* StaticCall */
	async staticCall(params: QueryStaticCallRequest): Promise<QueryStaticCallResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.data !== 'undefined') {
			options.params.data = params.data;
		}
		if (typeof params?.to !== 'undefined') {
			options.params.to = params.to;
		}
		const endpoint = `sei-protocol/seichain/evm/static_call`;
		return await this.req.get<QueryStaticCallResponseSDKType>(endpoint, options);
	}
	/* Pointer */
	async pointer(params: QueryPointerRequest): Promise<QueryPointerResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.pointerType !== 'undefined') {
			options.params.pointer_type = params.pointerType;
		}
		if (typeof params?.pointee !== 'undefined') {
			options.params.pointee = params.pointee;
		}
		const endpoint = `sei-protocol/seichain/evm/pointer`;
		return await this.req.get<QueryPointerResponseSDKType>(endpoint, options);
	}
}
