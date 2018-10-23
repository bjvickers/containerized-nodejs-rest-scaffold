"use strict"

import { Container } from "inversify"

import controllers from "./controllers"
import router from "./router"
import server from "./server"
import serviceFactories from "./service-factories"
import services from "./services"

const container: Container = new Container()
container.load(controllers)
container.load(services)
container.load(router)
container.load(server)
container.load(serviceFactories)

export default container
