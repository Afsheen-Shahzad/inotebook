const express = require('express');
const User = require('../models/User');
const router  = express.Router();


//create a user using : POST '/api/auth' endpoint. It doesn't required authentication 

//router.get('/',(req,res)=>{
router.post('/',(req,res)=>{
   /* obj = {
        name: 'afsheen',
        age: 33
    }
    res.json(obj); */
    console.log(req.body)
    const user = User(req.body)
    
    user.save();
    res.json(req.body);
})

module.exports = router;