"use strict"

import bodyParser from "body-parser"
import express from "express"
import helmet from "helmet"
import http from "http"
import { injectable } from "inversify"
import os from "os"
import "reflect-metadata"
import l from "../lib/logger"
import swaggerify from "./swagger"

const app = express()

// @TODO: Use package 'http-errors' as required.
// @TODO: Either inject all routes into constructor, or find a way to
// @TODO: add routes AFTER the swaggerify() callback is executed.
@injectable()
export default class Server {
  constructor() {
    app.use(helmet())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    swaggerify(app)
  }

  public addRoute(route: string, router: express.Router): Server {
    app.use(route, router)
    return this
  }

  public listen(port: number): void {
    const welcome = (portIn: number) => () => {
      l.info(`up and running in ${process.env.NODE_ENV || "development"} @: ${os.hostname()} on port: ${portIn}}`)
    }
    http.createServer(app).listen(port, welcome(port))
  }
}
