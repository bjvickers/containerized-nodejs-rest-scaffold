let express = require('express')
let router = express.Router()

/* GET home page. */
router.get('/', function (req: any, res: any, next: any) {
  res.render('index', { title: 'Express' })
})

export { router }
