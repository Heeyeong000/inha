var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // rendering 하는것. index는 루트이기 때문.
  // home.ejs를 출력하겠다는 의미.
  // ejs는 서버에서 보내주는 변수값을 처리할수 있고, html은 그냥 보여주기만 한다.
  res.render('index', {title: '홈페이지', pageName:'home.ejs'});
});

module.exports = router;
