const Course = require('../models').Course;
const Student = require('../models').Student;
const Lecturer = require('../models').Lecturer;
var JWT = require('../middleware/jwt_authentication');
var myFunction = {

loginSuccess: function(req,res) {
  var username=req.body.username;
  var password=req.body.password;

  if(username!=null && password!=null){
    var payload={"username":username,"id":123};
    var token;
  JWT.generateToken(payload,function(err,result) {
  token=result;

  });
  res.status(201).send({token:token,message:"success",code:201});
  }


  else {
    res.status(404).send({message:"failed",code:404});

  }

},

getData: function(req,res)
{
var username=req.body.username;
var password=req.body.password;

  res.status(200).send({message:"getData",code:200,data:res.tokenUsername});

}
};
module.exports =myFunction;
