import type { GetSeiActionResponse, PostSeiActionRequest, PostSeiActionResponse } from "@sei-js/actions";
import { cosmos } from "@sei-js/proto";
import express, { type Request, type Router } from "express";
import { StatusCodes } from "http-status-codes";
import { app } from "../../server";

export const staking: Router = express.Router();

staking.get("/", (req, res) => {
  const response: GetSeiActionResponse = {
    icon: "https://rhinostake.com/_next/image?url=%2Fimg%2Flogo-footer.png&w=384&q=75",
    label: "Stake SEI",
    title: "Stake with Rhino",
    description: "Stake Sei with Rhino",
    links: {
      actions: [
        {
          label: "Stake 1 SEI",
          href: "/api/stake/1",
        },
        {
          label: "Stake 5 SEI",
          href: "/api/stake/5",
        },
        {
          label: "Stake 10 SEI",
          href: "/api/stake/10",
        },
        {
          href: "/api/stake/{amount}",
          label: "Choose Amount",
          parameters: [
            {
              name: "amount",
              label: "Enter a Sei amount",
            },
          ],
        },
      ],
    },
  };
  res.status(StatusCodes.OK).send(response);
});

staking.post("/:amount", (req: Request, res) => {
  const body = req.body as PostSeiActionRequest;

  const msg = cosmos.staking.v1beta1.MsgDelegate.fromPartial({
    delegatorAddress: body.sender,
    validatorAddress: "seivaloper146m089lq8mkqw6w0mmlhxz6247g2taha89at74",
    amount: { denom: "usei", amount: req.params.amount },
  });

  const response: PostSeiActionResponse = {
    transaction: msg,
    message: "Stake successful!",
  };
  res.status(StatusCodes.OK).send(response);
});
