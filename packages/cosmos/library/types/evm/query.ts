import type { PointerType } from "./enums";

export interface QuerySeiAddressByEVMAddressRequest {
	evm_address: string;
}

export interface QuerySeiAddressByEVMAddressResponse {
	sei_address: string;
	associated: boolean;
}

export interface QueryEVMAddressBySeiAddressRequest {
	sei_address: string;
}

export interface QueryEVMAddressBySeiAddressResponse {
	evm_address: string;
	associated: boolean;
}

export interface QueryStaticCallRequest {
	data: Uint8Array;
	to: string;
}

export interface QueryStaticCallResponse {
	data: Uint8Array;
}

export interface QueryPointerRequest {
	pointer_type: PointerType;
	pointee: string;
}

export interface QueryPointerResponse {
	pointer: string;
	version: number;
	exists: boolean;
}

export interface QueryPointerVersionRequest {
	pointer_type: PointerType;
}

export interface QueryPointerVersionResponse {
	version: number;
	cw_code_id: number;
}

export interface QueryPointeeRequest {
	pointer_type: PointerType;
	pointer: string;
}

export interface QueryPointeeResponse {
	pointee: string;
	version: number;
	exists: boolean;
}
