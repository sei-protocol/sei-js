import type { GetSeiActionResponse, PostSeiActionResponse } from "@sei-js/actions";
import { StatusCodes } from "http-status-codes";
import request from "supertest";
import { app } from "../../../server";

describe("API endpoints", () => {
  // Test for the stake GET endpoint
  it("GET /api/stake - returns correct stake action details", async () => {
    const response = await request(app).get("/api/stake");
    const result = response.body as GetSeiActionResponse;

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(result.label).toBe("Stake SEI");
    expect(result.title).toBe("Stake with Rhino");
    expect(result.description).toBe("Stake Sei with Rhino");
    expect(result.links.actions.length).toBe(4);

    expect(result.links.actions[0].label).toBe("Stake 1 SEI");
    expect(result.links.actions[1].label).toBe("Stake 5 SEI");
    expect(result.links.actions[2].label).toBe("Stake 10 SEI");
    expect(result.links.actions[3].label).toBe("Choose Amount");
  });

  // Test for the stake POST endpoint
  it("POST /api/stake/:amount - processes staking correctly", async () => {
    const response = await request(app).post("/api/stake/10").send({ sender: "sei1exampleaddress" });
    const result = response.body as PostSeiActionResponse;

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(result.message).toBe("Stake successful!");
    expect(result.transaction.amount.amount).toBe("10");
    expect(result.transaction.amount.denom).toBe("usei");
    expect(result.transaction.delegatorAddress).toBe("sei1exampleaddress");
    expect(result.transaction.validatorAddress).toBe("seivaloper146m089lq8mkqw6w0mmlhxz6247g2taha89at74");
  });
});
