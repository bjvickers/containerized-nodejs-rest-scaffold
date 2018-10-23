"use strict"

import { Container, ContainerModule, interfaces } from "inversify"
import TYPES from "./types"

import IAllExamplesController from "../api/controllers/examples/IAllExamplesController"
import ICreateExampleController from "../api/controllers/examples/ICreateExampleController"
import IExampleByIdController from "../api/controllers/examples/IExampleByIdController"

import AllExamplesController from "../api/controllers/examples/AllExamplesController"
import CreateExampleController from "../api/controllers/examples/CreateExampleController"
import ExampleByIdController from "../api/controllers/examples/ExampleByIdController"

const controllers: ContainerModule = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
  bind<IAllExamplesController>(TYPES.IAllExamplesController).to(AllExamplesController)
  bind<ICreateExampleController>(TYPES.ICreateExampleController).to(CreateExampleController)
  bind<IExampleByIdController>(TYPES.IExampleByIdController).to(ExampleByIdController)
})

export default controllers
