"use strict"

import { Container, ContainerModule, interfaces } from "inversify"
import TYPES from "./types"

import IExampleService from "../api/services/IExampleService"

const services: ContainerModule =
  new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind<interfaces.Factory<IExampleService>>(
      TYPES.IExampleServiceFactory).toFactory<IExampleService>((context: interfaces.Context) => {
        return () => {
            return context.container.get<IExampleService>(TYPES.IExampleService)
        }
      })
    })

export default services
