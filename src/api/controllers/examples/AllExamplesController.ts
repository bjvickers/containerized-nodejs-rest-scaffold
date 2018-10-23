"use strict"

import express from "express"
import { inject, injectable } from "inversify"
import "reflect-metadata"
import TYPES from "../../../ioc/types"
import IExampleService from "../../services/IExampleService"
import IAllExamplesController from "./IAllExamplesController"

@injectable()
export default class AllExamplesController implements IAllExamplesController {
  protected service: IExampleService

  public constructor(
    @inject(TYPES.IExampleService) service: IExampleService
  ) {
    this.service = service
  }

  public all(req: express.Request, res: express.Response): void {
    this.service.all().then((r) => res.json(r))
  }

  public createRouter(): express.Router {
    return express.Router()
      .get("/", (req: express.Request, res: express.Response) => this.all(req, res))
  }
}
