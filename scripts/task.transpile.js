"use strict"

const execa = require('execa')

const action = async () => {
  await execa("rm", ["-rf", "dist"])
  await execa("mkdir", ["-v", "dist"])
  await execa("./node_modules/.bin/tsc", [])
}

action()
