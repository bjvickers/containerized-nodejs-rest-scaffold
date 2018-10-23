"use strict"

const execa = require('execa')
const Listr = require('listr')
const displayTaskError = require('./notice.taskerror.js')
 
const tasks = new Listr([
  {
    title: 'Running unit tests',
    task: () => execa('npm', ['run', 'test:unit'])
  },
  {
    title: 'Running spec tests',
    task: () => execa('npm', ['run', 'test:spec'])
  },
  {
    title: 'Running feature tests',
    task: () => execa('npm', ['run', 'test:feature'])
  }
])
 
tasks.run().catch(err => {
  displayTaskError(err.message.trim())
  process.exit(1)
})
