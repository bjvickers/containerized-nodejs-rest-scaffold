"use strict"

// Populate process.env with the variables in .env
import dotenv from "dotenv"
import express from "express"
dotenv.config()

import ExampleController from "../api/controllers/examples/ExampleController"
import ExampleControllerRouterFactory from "../api/controllers/examples/ExampleControllerRouterFactory"
import IExampleController from "../api/controllers/examples/IExampleController"
import ExampleService from "../api/services/ExampleService"
import IExampleService from "../api/services/IExampleService"

import ApplicationRoutes from "../server/ApplicationRoutes"
import IApplicationRoutes from "../server/IApplicationRoutes"
import IServer from "../server/IServer"
import Server from "../server/Server"

// Apply dependency injection
const exampleService: IExampleService = new ExampleService()
const exampleController: IExampleController = new ExampleController(exampleService)

// Build application routes
const appRoutes: IApplicationRoutes<any> = new ApplicationRoutes<express.Router>()
appRoutes.add("/api/v1/examples", ExampleControllerRouterFactory.create(exampleController))

const server: IServer<any, any> = new Server<express.Application, express.Router>()
server.router(appRoutes)
server.listen(parseInt(process.env.PORT || "3000", 10))
