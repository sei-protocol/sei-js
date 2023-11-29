import Long from 'long';
import { RawLong } from './types';

export const sanitizedUint8Array = (value: any) => {
	const valueArray = Object.values(value).map((val) => val as number);
	return new Uint8Array(valueArray);
};

export const longResponseToNumber = (longObj: RawLong): number => {
	return new Long(longObj.low, longObj.high, longObj.unsigned).toNumber();
};

export const byteArrayToHex = (byteArray: Uint8Array) => {
	return Array.from(byteArray, (byte) => ('0' + (byte & 0xff).toString(16)).slice(-2)).join('');
};
