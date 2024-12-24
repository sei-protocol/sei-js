import { Encoder } from "../library/encoding";

describe("Encoder", () => {
	it("should correctly encode and decode a MsgSend message", () => {
		// Sample MsgSend object
		const msgSend = Encoder.cosmos.bank.v1beta1.MsgSend.fromPartial({
			from_address: "sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2",
			to_address: "sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9",
			amount: [{ denom: "usei", amount: "100" }],
		});

		// Encode the message
		const encoded = Encoder.cosmos.bank.v1beta1.MsgSend.encode(msgSend).finish();
		expect(encoded).toBeInstanceOf(Uint8Array);
		expect(encoded.length).toBeGreaterThan(0);

		// Decode the message back
		const decoded = Encoder.cosmos.bank.v1beta1.MsgSend.decode(encoded);
		expect(decoded).toEqual(msgSend);

		// Verify that decoded message matches the original object
		expect(decoded.from_address).toBe(msgSend.from_address);
		expect(decoded.to_address).toBe(msgSend.to_address);
		expect(decoded.amount).toEqual(msgSend.amount);
	});
});
