"use strict"

// Populate process.env with the variables in .env
import dotenv from "dotenv"
dotenv.config()

import routes from "../server/routes"
import Server from "../server/server"

// # TODO: If process.env.PORT is not set, exit. Then remove that
// check below.
const port: number = parseInt(process.env.PORT || "3000", 10)
export default new Server()
  .router(routes)
  .listen(port)
