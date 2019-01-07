var express             = require('express');
var jwt                 = require('jsonwebtoken');
exports.generateToken=generateToken;
exports.verifyToken=verifyToken;
var secret_key = 'sairaansari11';
function generateToken(payload,callback) {

 var token = jwt.sign(payload, secret_key);
  callback(null, token);

  }


function verifyToken(req, res, next) {
  console.log(req.headers.authorization);
    // check header or url parameters or post parameters for token
    var bearerHeader =  req.body.myToken;

    //console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        if(bearer.length>1){
            bearerHeader = bearer[1];
        }
    }

    // decode token
  if (bearerHeader) {
    jwt.verify(bearerHeader, secret_key, function(err, decoded) {
      if (err) {
        return res.json({ data:null , result: "wrong token",flag:144 });
      } else {
        // if everything is good, save to request for use in other routes
        req.authenticate_token = decoded;
     // console.log(decoded.id);

      res.tokenUsername=decoded.username;
      res.AuthToken = bearerHeader;
        next();
      }
    });
  } else {
      return res.json({ data:null , result: "Invalid Token",flag:144 });
  }
}
