"use strict"

const execa = require('execa')
const Listr = require('listr')
const displayTaskError = require('./notice.taskerror.js')
 
const tasks = new Listr([
  {
    title: 'Transpiling TypeScript to JavaScript',
    task: () => execa('npm', ['run', 'build:transpile'])
  },
  {
    title: 'Copying static assets to dist/',
    task: () => execa('npm', ['run', 'build:copy-static-assets'])
  }
])

tasks.run().catch(err => {
  displayTaskError(err.message.trim())
  process.exit(1)
})
