"use strict"

import { Request, Response } from "express"
import IRouterFactory from "../IRouterFactory"

export default interface IAllExamplesController extends IRouterFactory {
  all(req: Request, res: Response): void
}
