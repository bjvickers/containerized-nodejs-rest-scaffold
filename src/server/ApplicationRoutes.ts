"use strict"

import express from "express"
import IApplicationRoutes from "./IApplicationRoutes"

export default class ApplicationRoutes<T> implements IApplicationRoutes<express.Router> {
  protected routes: Map<string, express.Router>

  constructor() {
    this.routes = new Map<string, express.Router>()
  }

  public add(route: string, router: express.Router): void {
    this.routes.set(route, router)
  }

  public all(): Map<string, express.Router> {
    return this.routes
  }
}
