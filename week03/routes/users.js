var express = require('express');
var router = express.Router();


/* GET users listing. */
/* '/'에는 /users가 생략되어 있음. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
