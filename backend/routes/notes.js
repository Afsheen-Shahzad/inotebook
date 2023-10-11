const express = require('express');

const router  = express.Router();

router.get('/',(req,res)=>{
   /* obj = {
        name: 'afsheen',
        age: 33
    }
    res.json(obj); */
    res.json([]);
})

module.exports = router;