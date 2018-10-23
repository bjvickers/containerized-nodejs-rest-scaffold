"use strict"

import { Container, ContainerModule, interfaces } from "inversify"
import TYPES from "./types"

import IRouter from "../server/IRouter"
import Router from "../server/Router"

const router: ContainerModule = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
  bind<IRouter>(TYPES.IRouter).to(Router)
})

export default router
