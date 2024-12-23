const jwt = require("jsonwebtoken")
const jwtSecret = 

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization;
    const words = token.split(" ")
    const jwtToken = words[1];

    try{
        const result = jwt.verify(jwtToken,jwtSecret);

        if(result.username){
            req.username = result.username;
            next();
        }
        else{
            res.json({
                msg: "Authentication Failed!"
            })
        }
    }
    catch(e){
        res.json({
            msg: "Incorrect Inputs"
        })
    }
}

module.exports = userMiddleware;