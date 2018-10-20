"use strict"

// # TODO: Implement InversifyJS modules here
// # TODO: Move this and types.ts into ../di
import express from "express"
import { Container } from "inversify"
import TYPES from "./types"

import IExampleController from "../api/controllers/examples/IExampleController"
import IExampleRouterFactory from "../api/controllers/examples/IExampleRouterFactory"
import IExampleService from "../api/services/IExampleService"
import Server from "../server/Server"

import ExampleController from "../api/controllers/examples/ExampleController"
import ExampleRouterFactory from "../api/controllers/examples/ExampleRouterFactory"
import ExampleService from "../api/services/ExampleService"

const container: Container = new Container()
container.bind<Server>(TYPES.Server).to(Server)
container.bind<IExampleController>(TYPES.IExampleController).to(ExampleController)
container.bind<IExampleRouterFactory>(TYPES.IExampleRouterFactory).to(ExampleRouterFactory)
container.bind<IExampleService>(TYPES.IExampleService).to(ExampleService)

export default container
