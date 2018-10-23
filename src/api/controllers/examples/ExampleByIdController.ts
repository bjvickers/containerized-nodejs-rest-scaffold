"use strict"

import express from "express"
import { inject, injectable } from "inversify"
import "reflect-metadata"
import TYPES from "../../../ioc/types"
import IExampleService from "../../services/IExampleService"
import IExampleByIdController from "./IExampleByIdController"

@injectable()
export default class ExampleByIdController implements IExampleByIdController {
  protected service: IExampleService

  public constructor(
    @inject(TYPES.IExampleService) service: IExampleService
  ) {
    this.service = service
  }

  public byId(req: express.Request, res: express.Response): void {
    this.service.byId(req.params.id).then((r) => {
      if (r) { res.json(r) } else { res.status(404).end() }
    })
  }

  public createRouter(): express.Router {
    return express.Router()
      .get("/:id", (req: express.Request, res: express.Response) => this.byId(req, res))
  }
}
