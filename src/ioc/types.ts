"use strict"

const TYPES = {
  IAllExamplesController: Symbol.for("IAllExamplesController"),
  ICreateExampleController: Symbol.for("ICreateExampleController"),
  IExampleByIdController: Symbol.for("IExampleByIdController"),
  IExampleService: Symbol.for("IExampleService"),
  IExampleServiceFactory: Symbol.for("Factory<IExampleService>"),
  IRouter: Symbol.for("IRouter"),
  IServer: Symbol.for("IServer")
}

export default TYPES
