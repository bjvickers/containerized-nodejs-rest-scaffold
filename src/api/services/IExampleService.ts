"use strict"

import IExample from "../../models/IExample"

export default interface IExampleService {
  all(): Promise<IExample[]>
  byId(id: number): Promise<IExample>
  create(name: string): Promise<IExample>
}
