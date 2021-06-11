import jwt from "jsonwebtoken"
import config from "config"

export default (req,res,next) => {
    // Get token from header
    const token = req.headers["my-auth-token"]

    // Condition for token not returned
    if(!token){
        // Not authorized status
        return res.status(401).json({msg:"Token not found, authorization denied"})
    }

    // Verify token if present
    try {
        const decodedToken = jwt.verify(token,config.get("jsonWebTokenSecret"))
        
        // Setting req.user to the earlier payload user value
        req.user = decodedToken.user

        next()
    } catch (err) {
        res.status(401).json({msg: "Token is not valid"})
    }
}