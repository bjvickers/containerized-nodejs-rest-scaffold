"use strict"

import express from "express"
import examplesRouter from "../api/controllers/examples/router"

export default function routes(app: express.Application): void {
  app.use("/api/v1/examples", examplesRouter)
}
