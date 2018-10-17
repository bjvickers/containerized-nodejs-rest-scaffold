"use strict"

import bodyParser from "body-parser"
import express from "express"
import http from "http"
import os from "os"
import l from "../lib/logger"
import swaggerify from "./swagger"

const app = express()

export default class ExpressServer {
  constructor() {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
  }

  public router(routes: (app: express.Application) => void): ExpressServer {
    swaggerify(app, routes)
    return this
  }

  public listen(port: number): express.Application {
    const welcome = (portIn: number) => () => {
      l.info(`up and running in ${process.env.NODE_ENV || "development"} @: ${os.hostname()} on port: ${portIn}}`)
    }
    http.createServer(app).listen(port, welcome(port))
    return app
  }
}
