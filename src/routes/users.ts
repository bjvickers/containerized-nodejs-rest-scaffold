'use strict'

import express from 'express'

const router: express.Router = express.Router()

/* GET users listing. */
router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
  res.send('respond with a resource')
})

export default router
