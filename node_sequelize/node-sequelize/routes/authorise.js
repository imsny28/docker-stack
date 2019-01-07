var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();


/* GET index */
//
router.get('/', function(req, res) {
  // access token
  const user = { id: 3 }
  const token = jwt.sign({ user }, 'my_secret_key');
  res.json({
    token: token
  });
});

router.get('/login', ensureToken, function(req, res) {
  res.json({
    text: "this is json"
  });
});

router.get('/protected',ensureToken,  function(req, res) {
  jwt.verify(req.token, 'my_secret_key', function(err, data){
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: "this is protected",
        data: data
      });
    }
  });

});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403)
  }
}

module.exports = router;
