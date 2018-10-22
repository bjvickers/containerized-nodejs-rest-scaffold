"use strict"

let art = require("ascii-art")

let options = {
  width : 100,
  headerStyle : "yellow",
  dataStyle : "bright_white",
  borderColor : "gray",
  columns : [],
  data : [],
  bars : "single"
}

let callback = (rendered) => {
  console.log(rendered)
}

module.exports = {
  art,
  options,
  callback
}
