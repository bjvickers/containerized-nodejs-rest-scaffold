"use strict"

import { Request, Response } from "express"

export default interface IExampleController {
  all(req: Request, res: Response): void
  byId(req: Request, res: Response): void
  create(req: Request, res: Response): void
}
