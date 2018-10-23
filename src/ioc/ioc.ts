"use strict"

import { Container } from "inversify"

import controllers from "./controllers"
import router from "./router"
import server from "./server"
import services from "./services"
import serviceFactories from "./service-factories"

const container: Container = new Container()
container.load(controllers)
container.load(services)
container.load(router)
container.load(server)
container.load(serviceFactories)

export default container
