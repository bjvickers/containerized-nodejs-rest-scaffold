"use strict"

import bodyParser from "body-parser"
import express from "express"
import helmet from "helmet"
import http from "http"
import { inject, injectable } from "inversify"
import os from "os"
import "reflect-metadata"
import TYPES from "../ioc/types"
import log from "../lib/logger"
import IRouter from "./IRouter"
import IServer from "./IServer"
import swaggerify from "./swagger"

const app = express()

// @TODO: Use package 'http-errors' as required.
@injectable()
@log()
export default class Server implements IServer {
  public constructor(@inject(TYPES.IRouter) router: IRouter) {
    app.use(helmet())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    swaggerify(app, router)
  }

  public listen(port: number): void {
    http.createServer(app).listen(port)
  }
}
