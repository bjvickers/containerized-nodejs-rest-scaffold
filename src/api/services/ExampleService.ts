"use strict"

import { injectable } from "inversify"
import "reflect-metadata"
import log from "../../lib/logger"
import IExample from "../../models/IExample"
import IExampleService from "./IExampleService"

let id = 0
const examples: IExample[] = [
  { id: id++, name: "example 0" },
  { id: id++, name: "example 1" }
]

@injectable()
@log()
export default class ExampleService implements IExampleService {
  public all(): Promise<IExample[]> {
    return Promise.resolve(examples)
  }

  public byId(idIn: number): Promise<IExample> {
    return this.all().then((r) => r[idIn])
  }

  public create(name: string): Promise<IExample> {
    const example: IExample = {
      id: id++,
      name
    }
    examples.push(example)
    return Promise.resolve(example)
  }
}
