"use strict"

import * as shell from "shelljs"

shell.cp("-R", "src/server/swagger/Api.yaml", "dist/server/swagger/Api.yaml")
