"use strict"

import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import helmet from "helmet"
import http from "http"
import os from "os"
import l from "../lib/logger"
import swaggerify from "./swagger"

const app = express()

export default class ExpressServer {
  constructor() {
    app.use(helmet())

    // Cors enabled by default for all domains. See npm package
    // for details on how to limit domains.
    app.use(cors())
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
