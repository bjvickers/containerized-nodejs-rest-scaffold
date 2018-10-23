"use strict"

// Populate process.env with the variables in .env
import dotenv from "dotenv"
dotenv.config()

import container from "../ioc/ioc"
import TYPES from "../ioc/types"
import IServer from "../server/IServer"

const server: IServer = container.get<IServer>(TYPES.IServer)
server.listen(parseInt(process.env.PORT || "3000", 10))
