"use strict"

import express from "express"
import { inject, injectable } from "inversify"
import "reflect-metadata"
import IAllExamplesController from "../api/controllers/examples/IAllExamplesController"
import ICreateExampleController from "../api/controllers/examples/ICreateExampleController"
import IExampleByIdController from "../api/controllers/examples/IExampleByIdController"
import TYPES from "../ioc/types"
import IRouter from "./IRouter"

@injectable()
export default class Router implements IRouter {
  protected allExamplesController: IAllExamplesController
  protected createExampleController: ICreateExampleController
  protected exampleByIdController: IExampleByIdController

  public constructor(
    @inject(TYPES.IAllExamplesController) allExamplesController: IAllExamplesController,
    @inject(TYPES.ICreateExampleController) createExampleController: ICreateExampleController,
    @inject(TYPES.IExampleByIdController) exampleByIdController: IExampleByIdController
  ) {
    this.allExamplesController = allExamplesController
    this.createExampleController = createExampleController
    this.exampleByIdController = exampleByIdController
  }

  public addRoutes(app: express.Application): void {
    app.use("/api/v1/examples", this.allExamplesController.createRouter())
    app.use("/api/v1/examples", this.createExampleController.createRouter())
    app.use("/api/v1/examples", this.exampleByIdController.createRouter())
  }
}
