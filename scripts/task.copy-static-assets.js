"use strict"

const execa = require('execa')

const action = async () => {
  await execa("mkdir", ["-vp", "dist/server/swagger"])
  await execa("cp", ["-R", "src/server/swagger/Api.yaml", "dist/server/swagger/Api.yaml"])
}

action()
