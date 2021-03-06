"use strict"

import express from "express"
import { inject, injectable } from "inversify"
import "reflect-metadata"
import TYPES from "../../../ioc/types"
import IExampleService from "../../services/IExampleService"
import ICreateExampleController from "./ICreateExampleController"

@injectable()
export default class CreateExampleController implements ICreateExampleController {
  protected service: IExampleService

  public constructor(
    @inject(TYPES.IExampleService) service: IExampleService
  ) {
    this.service = service
  }

  public create(req: express.Request, res: express.Response): void {
    this.service.create(req.body.name).then((r) =>
      res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r)
    )
  }

  public createRouter(): express.Router {
    return express.Router()
      .post("/", (req: express.Request, res: express.Response) => this.create(req, res))
  }
}
