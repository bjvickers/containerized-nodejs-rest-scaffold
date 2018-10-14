let express = require('express')
let router = express.Router()

/* GET users listing. */
router.get('/', function (req: any, res: any, next: any) {
  res.send('respond with a resource')
})

export { router }
