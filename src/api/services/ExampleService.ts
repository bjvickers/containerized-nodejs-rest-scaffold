"use strict"

import { injectable } from "inversify"
import "reflect-metadata"
import log from "../../lib/logger"
import IExample from "../../models/IExample"
import IExampleService from "./IExampleService"

let counter = 0
const examples: IExample[] = [
  { id: counter++, name: "example 0" },
  { id: counter++, name: "example 1" }
]

@injectable()
@log()
export default class ExampleService implements IExampleService {
  public all(): Promise<IExample[]> {
    return Promise.resolve(examples)
  }

  public byId(id: number): Promise<IExample> {
    return this.all().then((r) => r[id])
  }

  public create(name: string): Promise<IExample> {
    const example: IExample = {
      id: counter++,
      name
    }
    examples.push(example)
    return Promise.resolve(example)
  }
}
