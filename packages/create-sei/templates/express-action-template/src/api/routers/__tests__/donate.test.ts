import type { GetSeiActionResponse, PostSeiActionResponse } from "@sei-js/actions";
import { StatusCodes } from "http-status-codes";
import request from "supertest";
import { app } from "../../../server";

describe("API endpoints", () => {
  // Test for the donate GET endpoint
  it("GET /api/donate - returns correct donation action details", async () => {
    const response = await request(app).get("/api/donate");
    const result = response.body as GetSeiActionResponse;

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(result.label).toBe("Donate SEI");
    expect(result.title).toBe("Donate SEI");
    expect(result.description).toBe("Donate SEI");
    expect(result.links.actions.length).toBe(4);

    expect(result.links.actions[0].label).toBe("Donate 1 SEI");
    expect(result.links.actions[1].label).toBe("Donate 5 SEI");
    expect(result.links.actions[2].label).toBe("Donate 10 SEI");
    expect(result.links.actions[3].label).toBe("Choose Amount");
  });

  // Test for the donate POST endpoint
  it("POST /api/donate/:amount - processes donation correctly", async () => {
    const response = await request(app).post("/api/donate/5").send();
    const result = response.body as PostSeiActionResponse;

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(result.message).toBe("Thanks for donating!");
    expect(result.transaction.to).toBe("0xb24aEE2011D6EBb0B146B4e184dE21c3141729a7");
    expect(result.transaction.value).toBe("5");
  });
});
