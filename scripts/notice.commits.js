"use strict"

let notice = require("./notice")

notice.options.columns = ["Commits"]
notice.options.data = [ 
  {Commits: "Please format git commits correctly."},
  {Commits: "Info: https://www.conventionalcommits.org"}
]
notice.art.table(notice.options, notice.callback)
