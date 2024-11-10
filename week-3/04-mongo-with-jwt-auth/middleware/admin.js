// Middleware for handling auth
const jwt = require("jsonwebtoken")
const jwtSecret = "secret";

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

     const token = req.headers.authorization;
     const words = token.split(' ');

     const jwtToken = words[1];
     try{
     const result=  jwt.verify(jwtToken,jwtSecret) ;

     if(result.username) {
       next();
     }
     else{
        res.status(403).json({
            msg: "Not authenticated"
        })
     }
     }
     catch(e){
        res.json({
            msg: "Wrong Input"
        })
     }



}

module.exports = adminMiddleware;