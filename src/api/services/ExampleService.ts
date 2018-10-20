"use strict"

import { injectable } from "inversify"
import "reflect-metadata"
import L from "../../lib/logger"
import IExample from "../../models/IExample"
import IExampleService from "./IExampleService"

let id = 0
const examples: IExample[] = [
  { id: id++, name: "example 0" },
  { id: id++, name: "example 1" }
]

@injectable()
export default class ExampleService implements IExampleService {
  public all(): Promise<IExample[]> {
    L.info(examples, "fetch all examples")
    return Promise.resolve(examples)
  }

  public byId(idIn: number): Promise<IExample> {
    L.info(`fetch example with id ${idIn}`)
    return this.all().then((r) => r[idIn])
  }

  public create(name: string): Promise<IExample> {
    L.info(`create example with name ${name}`)
    const example: IExample = {
      id: id++,
      name
    }
    examples.push(example)
    return Promise.resolve(example)
  }
}
