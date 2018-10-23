"use strict"

const displayTaskError = require('./notice.taskerror.js')

let message = "Please format git commits correctly.\n"
message += "Style guide here: https://www.conventionalcommits.org"

displayTaskError(message)
process.exit(1)
