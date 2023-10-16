const express = require('express');
const User = require('../models/User');

const { body, validationResult } = require('express-validator');

const router  = express.Router();


//create a user using : POST '/api/auth' endpoint. It doesn't required authentication 

//router.get('/',(req,res)=>{
router.post('/',[
    body('name','Please enter correct name').isLength({ min: 5 }),
    body('username','Please enter correct username').isLength({min: 5}),
    body('password','Password length should be atleast 5').isLength({ min: 5 }),
    body('email','Enter valid email').isEmail()
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 

    User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      }).then(user => res.json(user)).catch(err =>
        {
            console.log(err)
            res.json({error : "Please enter a unique value for email/username", message : err.message})
    })
})

module.exports = router;

///https://express-validator.github.io/docs/6.15.0/