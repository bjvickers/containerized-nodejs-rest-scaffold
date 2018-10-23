"use strict"

import { Request, Response } from "express"
import IRouterFactory from "../IRouterFactory"

export default interface IExampleByIdController extends IRouterFactory {
  byId(req: Request, res: Response): void
}
