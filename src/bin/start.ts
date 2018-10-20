"use strict"

// Populate process.env with the variables in .env
import dotenv from "dotenv"
dotenv.config()

import IExampleController from "../api/controllers/examples/IExampleController"
import IExampleRouterFactory from "../api/controllers/examples/IExampleRouterFactory"
import Server from "../server/Server"
import container from "./inversify.config"
import TYPES from "./types"

const server: Server = container.get<Server>(TYPES.Server)

const exampleController: IExampleController = container.get<IExampleController>(TYPES.IExampleController)
const exampleRouterFactory: IExampleRouterFactory = container.get<IExampleRouterFactory>(TYPES.IExampleRouterFactory)
server.addRoute("/api/v1/examples", exampleRouterFactory.create(exampleController))

server.listen(parseInt(process.env.PORT || "3000", 10))
