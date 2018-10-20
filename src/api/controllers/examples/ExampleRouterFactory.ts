"use strict"

import express from "express"
import { inject, injectable } from "inversify"
import "reflect-metadata"
import IExampleController from "./IExampleController"
import IExampleRouterFactory from "./IExampleRouterFactory"

@injectable()
export default class ExampleRouterFactory implements IExampleRouterFactory {
  public create(controller: IExampleController): express.Router {
    return express.Router()
      .post("/", (req: express.Request, res: express.Response) => controller.create(req, res))
      .get("/", (req: express.Request, res: express.Response) => controller.all(req, res))
      .get("/:id", (req: express.Request, res: express.Response) => controller.byId(req, res))
  }
}
