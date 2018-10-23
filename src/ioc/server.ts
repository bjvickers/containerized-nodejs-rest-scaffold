"use strict"

import { Container, ContainerModule, interfaces } from "inversify"
import TYPES from "./types"

import IServer from "../server/IServer"
import Server from "../server/Server"

const server: ContainerModule = new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {
  bind<IServer>(TYPES.IServer).to(Server)
})

export default server
