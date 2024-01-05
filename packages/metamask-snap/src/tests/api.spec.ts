import { onRpcRequest } from '..';
import snapMock from './mocks/snap.mock';
import input from './mocks/input.mock';
import output from './mocks/output.mock';

describe('OnRPCRequest', () => {
	it('getPrivateKey', async () => {
		(global as any).snap = snapMock.success;

		const resp: any = await onRpcRequest(input.success.getPrivateKey);

		expect(resp).toMatchObject(output.success.getPrivateKey);
	});

	it('signDirect', async () => {
		(global as any).snap = snapMock.success;

		const resp: any = await onRpcRequest(input.success.signDirect);
		expect(resp.signed).toMatchObject(output.success.signDirect.signed);
		expect(resp.signature).toHaveProperty('signature');
		expect(resp.signature.pub_key).toStrictEqual(output.success.signDirect.signature.pub_key);
	});

	it('signAmino', async () => {
		(global as any).snap = snapMock.success;

		const resp: any = await onRpcRequest(input.success.signAmino);
		expect(resp.signed).toMatchObject(output.success.signAmino.signed);
		expect(resp.signature).toHaveProperty('signature');
		expect(resp.signature.pub_key).toStrictEqual(output.success.signAmino.signature.pub_key);
	});

	it('invalid method', async () => {
		await expect(onRpcRequest(input.failure.invalidMethod)).rejects.toThrow(output.failure.invalidMethod);
	});
});
