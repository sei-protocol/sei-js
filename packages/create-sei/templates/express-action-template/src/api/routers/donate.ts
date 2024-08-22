import type { GetSeiActionResponse, PostSeiActionResponse } from "@sei-js/actions";
import express, { type Request, type Response, type Router } from "express";
import { StatusCodes } from "http-status-codes";

export const donate: Router = express.Router();

donate.get("/", (req: Request, res: Response) => {
  const response: GetSeiActionResponse = {
    icon: "https://rhinostake.com/_next/image?url=%2Fimg%2Flogo-footer.png&w=384&q=75",
    label: "Donate SEI",
    title: "Donate SEI",
    description: "Donate SEI",
    links: {
      actions: [
        {
          label: "Donate 1 SEI",
          href: "/api/donate/1",
          parameters: [
            {
              name: "recipient",
              label: "Enter a recipient address",
            },
          ],
        },
        {
          label: "Donate 5 SEI",
          href: "/api/donate/5",
          parameters: [
            {
              name: "recipient",
              label: "Enter a recipient address",
            },
          ],
        },
        {
          label: "Donate 10 SEI",
          href: "/api/donate/10",
          parameters: [
            {
              name: "recipient",
              label: "Enter a recipient address",
            },
          ],
        },
        {
          href: "/api/donate/{amount}",
          label: "Choose Amount",
          parameters: [
            {
              name: "amount",
              label: "Enter a Sei amount",
            },
            {
              name: "recipient",
              label: "Enter a recipient address",
            },
          ],
        },
      ],
    },
  };

  res.status(StatusCodes.OK).send(response);
});

donate.post("/:amount", (req: Request, res) => {
  const transaction = {
    to: "0xb24aEE2011D6EBb0B146B4e184dE21c3141729a7",
    value: req.params.amount,
  };

  const response: PostSeiActionResponse = {
    transaction: transaction,
    message: "Thanks for donating!",
  };

  res.status(StatusCodes.OK).send(response);
});
