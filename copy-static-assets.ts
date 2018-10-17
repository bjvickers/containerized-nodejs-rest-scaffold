import * as shell from "shelljs"

shell.cp("-R", "src/public", "dist/public/")
shell.cp("-R", "src/public/stylesheets", "dist/public/")
shell.cp("-R", "src/views", "dist/views/")
shell.cp("-R", "src/server/swagger/Api.yaml", "dist/server/swagger/Api.yaml")
