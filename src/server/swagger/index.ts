"use strict"

import express from "express"
import path from "path"
import middleware from "swagger-express-middleware"

export default (app: express.Application): void => {
  middleware(path.join(__dirname, "Api.yaml"), app, (err: any, middlewareIn: middleware.SwaggerMiddleware): void => {
    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable("case sensitive routing")
    app.enable("strict routing")

    app.use(middlewareIn.metadata())
    app.use(middlewareIn.files(app, {
      apiPath: process.env.SWAGGER_API_SPEC
    }))

    app.use(middlewareIn.parseRequest({
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }))

    // These two middleware don't have any options (yet)
    app.use(
      middlewareIn.CORS(),
      middlewareIn.validateRequest())

    // Error handler to display the validation error as HTML
    app.use((errIn: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
      res.status(errIn.status)
      res.send(
        "<h1>" + errIn.status + " Error</h1>" +
        "<pre>" + errIn.message + "</pre>"
      )
    })
  })
}
