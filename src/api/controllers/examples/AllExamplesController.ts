"use strict"

import express from "express"
import { inject, injectable } from "inversify"
import "reflect-metadata"
import log, { IHookProperties } from "../../../lib/logger"
import TYPES from "../../../ioc/types"
import IExampleService from "../../services/IExampleService"
import IAllExamplesController from "./IAllExamplesController"

// @TODO: Refactor log hook functions
// Reduces the size of the log message, which would otherwise include
// the entire Request and Response objects.
const logHook = (props: IHookProperties): string => {
  props.arguments = { "Request": "Object", "Response": "Object" }
  return JSON.stringify(props)
}

@injectable()
@log({ hook: logHook })
export default class AllExamplesController implements IAllExamplesController {
  protected serviceFactory: () => IExampleService

  public constructor(
    @inject(TYPES.IExampleServiceFactory) serviceFactory: () => IExampleService
  ) {
    this.serviceFactory = serviceFactory
  }

  public all(req: express.Request, res: express.Response): void {
    const service = this.serviceFactory()
    service.all().then((r) => res.json(r))
  }

  public createRouter(): express.Router {
    return express.Router()
      .get("/", (req: express.Request, res: express.Response) => this.all(req, res))
  }
}
