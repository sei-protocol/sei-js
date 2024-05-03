import { TxRpc } from '../types';
import { BinaryReader } from '../binary';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import {
	QuerySeiAddressByEVMAddressRequest,
	QuerySeiAddressByEVMAddressResponse,
	QueryEVMAddressBySeiAddressRequest,
	QueryEVMAddressBySeiAddressResponse,
	QueryStaticCallRequest,
	QueryStaticCallResponse,
	QueryPointerRequest,
	QueryPointerResponse
} from './query';
/** Query defines the gRPC querier service. */
export interface Query {
	seiAddressByEVMAddress(request: QuerySeiAddressByEVMAddressRequest): Promise<QuerySeiAddressByEVMAddressResponse>;
	eVMAddressBySeiAddress(request: QueryEVMAddressBySeiAddressRequest): Promise<QueryEVMAddressBySeiAddressResponse>;
	staticCall(request: QueryStaticCallRequest): Promise<QueryStaticCallResponse>;
	pointer(request: QueryPointerRequest): Promise<QueryPointerResponse>;
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc;
	constructor(rpc: TxRpc) {
		this.rpc = rpc;
		this.seiAddressByEVMAddress = this.seiAddressByEVMAddress.bind(this);
		this.eVMAddressBySeiAddress = this.eVMAddressBySeiAddress.bind(this);
		this.staticCall = this.staticCall.bind(this);
		this.pointer = this.pointer.bind(this);
	}
	seiAddressByEVMAddress(request: QuerySeiAddressByEVMAddressRequest): Promise<QuerySeiAddressByEVMAddressResponse> {
		const data = QuerySeiAddressByEVMAddressRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.evm.Query', 'SeiAddressByEVMAddress', data);
		return promise.then((data) => QuerySeiAddressByEVMAddressResponse.decode(new BinaryReader(data)));
	}
	eVMAddressBySeiAddress(request: QueryEVMAddressBySeiAddressRequest): Promise<QueryEVMAddressBySeiAddressResponse> {
		const data = QueryEVMAddressBySeiAddressRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.evm.Query', 'EVMAddressBySeiAddress', data);
		return promise.then((data) => QueryEVMAddressBySeiAddressResponse.decode(new BinaryReader(data)));
	}
	staticCall(request: QueryStaticCallRequest): Promise<QueryStaticCallResponse> {
		const data = QueryStaticCallRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.evm.Query', 'StaticCall', data);
		return promise.then((data) => QueryStaticCallResponse.decode(new BinaryReader(data)));
	}
	pointer(request: QueryPointerRequest): Promise<QueryPointerResponse> {
		const data = QueryPointerRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.evm.Query', 'Pointer', data);
		return promise.then((data) => QueryPointerResponse.decode(new BinaryReader(data)));
	}
}
export const createRpcQueryExtension = (base: QueryClient) => {
	const rpc = createProtobufRpcClient(base);
	const queryService = new QueryClientImpl(rpc);
	return {
		seiAddressByEVMAddress(request: QuerySeiAddressByEVMAddressRequest): Promise<QuerySeiAddressByEVMAddressResponse> {
			return queryService.seiAddressByEVMAddress(request);
		},
		eVMAddressBySeiAddress(request: QueryEVMAddressBySeiAddressRequest): Promise<QueryEVMAddressBySeiAddressResponse> {
			return queryService.eVMAddressBySeiAddress(request);
		},
		staticCall(request: QueryStaticCallRequest): Promise<QueryStaticCallResponse> {
			return queryService.staticCall(request);
		},
		pointer(request: QueryPointerRequest): Promise<QueryPointerResponse> {
			return queryService.pointer(request);
		}
	};
};
