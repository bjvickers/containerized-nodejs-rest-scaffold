"use strict"

const chalk = require('chalk')
const execa = require('execa')
const Listr = require('listr')
const displayTaskError = require('./notice.taskerror.js')
 
const tasks = new Listr([
  {
    title: 'Building complexity report: ' + chalk.yellow('./reports/complexity.html'),
    task: () => execa('npm', ['run', 'report:complexity'])
  },
  {
    title: 'Building TODO/FIXME report: ' + chalk.yellow('./reports/reminders.html'),
    task: () => execa('npm', ['run', 'report:reminders'])
  }
])

tasks.run().catch(err => {
  displayTaskError(err.message.trim())
  process.exit(1)
})
