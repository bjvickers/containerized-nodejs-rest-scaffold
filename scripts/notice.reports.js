"use strict"

let notice = require("./notice")

notice.options.columns = ["Reports"]
notice.options.data = [ 
  {Reports: "./reports/complexity.html"},
  {Reports: "./reports/reminders.html"} 
]
notice.art.table(notice.options, notice.callback)
