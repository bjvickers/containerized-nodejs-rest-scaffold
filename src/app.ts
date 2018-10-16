'use strict'

import createError from 'http-errors'
import express from 'express'
import path from 'path'
import indexRouter from './routes/index'
import usersRouter from './routes/users'

// # TODO: Keep checking for @types/express-pino-logger, which does not yet exist
const logger = require('express-pino-logger')

const app: express.Application = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
  next(createError(404))
})

// error handler
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
