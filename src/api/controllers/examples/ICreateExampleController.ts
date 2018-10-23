"use strict"

import { Request, Response } from "express"
import IRouterFactory from "../IRouterFactory"

export default interface ICreateExampleController extends IRouterFactory {
  create(req: Request, res: Response): void
}
