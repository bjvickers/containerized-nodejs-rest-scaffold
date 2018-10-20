"use strict"

import express from "express"
import IExampleController from "./IExampleController"

export class ExampleControllerRouterFactory {
  public create(controller: IExampleController): express.Router {
    return express.Router()
      .post("/", (req: express.Request, res: express.Response) => controller.create(req, res))
      .get("/", (req: express.Request, res: express.Response) => controller.all(req, res))
      .get("/:id", (req: express.Request, res: express.Response) => controller.byId(req, res))
  }
}

export default new ExampleControllerRouterFactory()
