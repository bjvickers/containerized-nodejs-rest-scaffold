"use strict"

import { Request, Response } from "express"
import { inject, injectable } from "inversify"
import "reflect-metadata"
import TYPES from "../../../bin/types"
import IExampleService from "../../services/IExampleService"
import IExampleController from "./IExampleController"

@injectable()
export default class ExampleController implements IExampleController {
  protected service: IExampleService

  public constructor(
    @inject(TYPES.IExampleService) service: IExampleService
  ) {
    this.service = service
  }

  public all(req: Request, res: Response): void {
    this.service.all().then((r) => res.json(r))
  }

  public byId(req: Request, res: Response): void {
    this.service.byId(req.params.id).then((r) => {
      if (r) { res.json(r) } else { res.status(404).end() }
    })
  }

  public create(req: Request, res: Response): void {
    this.service.create(req.body.name).then((r) =>
      res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r)
    )
  }
}
