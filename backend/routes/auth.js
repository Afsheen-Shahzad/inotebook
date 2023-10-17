const express = require('express');
const User = require('../models/User');

const { body, validationResult } = require('express-validator');

const router  = express.Router();


//create a user using : POST '/api/auth/createuser' endpoint. It doesn't required authentication 

//router.get('/',(req,res)=>{
router.post('/createuser',[
    body('name','Please enter correct name').isLength({ min: 5 }),
    body('username','Please enter correct username').isLength({min: 5}),
    body('password','Password length should be atleast 5').isLength({ min: 5 }),
    body('email','Enter valid email').isEmail()
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
    user= await User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      })
    res.json({user})
}catch (error) {
  console.error(error.message);
  res.status(500).send("Some error occured")
}
})

module.exports = router;

///https://express-validator.github.io/docs/6.15.0/