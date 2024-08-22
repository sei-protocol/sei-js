import type { SeiActionsJSON } from "@sei-js/actions";
import { StatusCodes } from "http-status-codes";
import request from "supertest";
import { app } from "../../../server";

describe("API endpoints", () => {
  it("GET /actions.json - returns correct rules", async () => {
    const response = await request(app).get("/actions.json");
    const result = response.body as SeiActionsJSON;

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(result.rules).toBeDefined();
    expect(result.rules.length).toBe(2);

    expect(result.rules[0].pathPattern).toBe("/stake");
    expect(result.rules[0].apiPath).toBe("/api/stake");

    expect(result.rules[1].pathPattern).toBe("/donate");
    expect(result.rules[1].apiPath).toBe("/api/donate");
  });
});
