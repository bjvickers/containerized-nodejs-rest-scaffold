"use strict"

import pino from "pino"

const log = pino({
  level: process.env.LOG_LEVEL,
  name: process.env.APP_ID
})

export default log
