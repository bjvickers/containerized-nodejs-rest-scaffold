"use strict"

import express from "express"
import IExampleController from "./IExampleController"

export default interface IExampleRouterFactory {
  create(controller: IExampleController): express.Router
}
