"use strict"

import { Container, ContainerModule, interfaces } from "inversify"
import TYPES from "./types"

import ExampleService from "../api/services/ExampleService"
import IExampleService from "../api/services/IExampleService"

const services: ContainerModule = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
  bind<IExampleService>(TYPES.IExampleService).to(ExampleService)
})

export default services
