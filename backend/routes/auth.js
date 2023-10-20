const express = require('express');
const User = require('../models/User');

const { body, validationResult } = require('express-validator');

var bcrypt = require('bcryptjs');

const router  = express.Router();

var jwt = require('jsonwebtoken');
const JWT_secret = "harryisagoodboy";

//create a user using : POST '/api/auth/createuser' endpoint. It doesn't required authentication 

//router.get('/',(req,res)=>{
router.post('/createuser',[
    body('name','Please enter correct name').isLength({ min: 5 }),
    body('username','Please enter correct username').isLength({min: 5}),
    body('password','Password length should be atleast 5').isLength({ min: 5 }),
    body('email','Enter valid email').isEmail()
  /////https://express-validator.github.io/docs/6.15.0/
],async (req,res)=>{
  //if there are errors, return baad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
//check whether the user with this email exists already
try {
    let user = await User.findOne({email : req.body.email})
    if (user){
      return res.status(400).json({ error: "sorry a user with this email is already exists" });
    }
    //v use await bcoz it returens a promise
    //https://www.npmjs.com/package/bcryptjs
    var salt = await bcrypt.genSaltSync(10);
    const secPassword = await bcrypt.hashSync(req.body.password, salt);

    user= await User.create({
        name: req.body.name,
        username: req.body.username,
        password: secPassword,
        email: req.body.email
      })
      const data ={
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_secret);
      console.log(authToken)
      res.json({authToken})
      //res.json(user);
}catch (error) {
  console.error(error.message);
  res.status(500).send("Some error occured")
}
})

module.exports = router;



// Concepts

// https://express-validator.github.io/docs/6.15.0/
// https://www.npmjs.com/package/bcryptjs
// https://www.npmjs.com/package/jsonwebtoken
// https://jwt.io/
