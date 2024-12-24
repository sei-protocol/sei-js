import type { MsgSend } from "../library/types/cosmos/bank/v1beta1";
import type { Coin } from "../library/types/cosmos/base/v1beta1";

describe("MsgSend Type Validation", () => {
	it("should create a valid MsgSend object", () => {
		const msgSend: MsgSend = {
			from_address: "sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2",
			to_address: "sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9",
			amount: [{ denom: "usei", amount: "100" }],
		};

		expect(msgSend).toHaveProperty("from_address");
		expect(msgSend).toHaveProperty("to_address");
		expect(msgSend).toHaveProperty("amount");
		expect(msgSend.amount).toBeInstanceOf(Array);
		expect(msgSend.amount[0]).toHaveProperty("denom", "usei");
		expect(msgSend.amount[0]).toHaveProperty("amount", "100");
	});

	it("should validate nested structures in MsgSend.amount", () => {
		const coin: Coin = { denom: "usei", amount: "200" };
		const msgSend: MsgSend = {
			from_address: "sei1hafptm4zxy5nw8rd2pxyg83c5ls2v62tstzuv2",
			to_address: "sei1v6459sl87jyfkvzmy6y8a6j2fj8k5r6x2n2l9",
			amount: [coin],
		};

		// Validate nested properties
		expect(msgSend.amount[0].denom).toBe("usei");
		expect(msgSend.amount[0].amount).toBe("200");
	});
});
