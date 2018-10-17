"use strict"

import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import express from "express"
import http from "http"
import os from "os"
import path from "path"
import l from "../lib/logger"
import swaggerify from "./swagger"

const app = express()

export default class ExpressServer {
  constructor() {
    const root = path.normalize(path.join(__dirname, "/.."))
    app.set("appPath", path.join(root, "client"))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cookieParser(process.env.SESSION_SECRET))
    app.use(express.static(`${root}/public`))
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
