"use strict"

import express from "express"

export default interface IRouter {
  addRoutes(app: express.Application): void
}
