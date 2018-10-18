"use strict"

import L from "../../lib/logger"

let id = 0

interface IExample {
  id: number,
  name: string
}

const examples: IExample[] = [
  { id: id++, name: "example 0" },
  { id: id++, name: "example 1" }
]

export class ExamplesService {
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

export default new ExamplesService()
