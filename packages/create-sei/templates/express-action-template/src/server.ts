import cors from "cors";
import express, { type Express, type Request, type Response } from "express";
import helmet from "helmet";

import type { SeiActionsJSON } from "@sei-js/actions";
import { StatusCodes } from "http-status-codes";
import { donate, staking } from "./api/routers";

const app: Express = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// actions.json setup
app.get("/actions.json", (_req: Request, res: Response) => {
  const response: SeiActionsJSON = {
    rules: [
      {
        pathPattern: "/stake",
        apiPath: "/api/stake",
      },
      {
        pathPattern: "/donate",
        apiPath: "/api/donate",
      },
    ],
  };

  res.status(StatusCodes.OK).send(response);
});

// Routes
app.use("/api/stake", staking);
app.use("/api/donate", donate);

export { app };
