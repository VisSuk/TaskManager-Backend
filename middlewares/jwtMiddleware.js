const jwt = require('jsonwebtoken')


const jwtMiddleware = async(req, res, next) => {

    // console.log("Inside JWT Middleware")
    // console.log(req.headers.authorization)
    const token = req.headers['authorization'].split(" ")[1] 
    // console.log(token);
    
    try {
        
        const jwtResponse = jwt.verify(token, process.env.JWTSECRETKEY)
        // console.log(jwtResponse);
        req.payload = jwtResponse.userMail
        next()

    } catch (error) {
        res.status(405).json("Authorization Failed")
    }

}

module.exports = jwtMiddleware