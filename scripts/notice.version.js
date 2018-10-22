"use strict"

let notice = require("./notice")

notice.options.columns = ["Version"]
notice.options.data = [ 
  {Version: "Please update this project's semver as required."},
  {Version: "Use: npm run assist:bump-version"},
  {Version: "Info: https://semver.org/"}
]
notice.art.table(notice.options, notice.callback)
