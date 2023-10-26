var jwt = require('jsonwebtoken');
const JWT_secret = "harryisagoodboy";

const fetchuser = (req,res,next)=>{
    //get the user from jwt token and add id to req object
    const token= req.header('auth-token')
    
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid tokena"})
    }
    
    try {
        const data = jwt.verify(token, JWT_secret)
        
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send("Please authenticate using a valid tokenb");   
    }
}

module.exports=fetchuser;