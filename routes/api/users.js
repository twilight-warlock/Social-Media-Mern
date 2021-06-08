import { Router } from "express"
import { check, validationResult} from "express-validator"
import User from "../../models/User.js"
import gravatar from "gravatar"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = Router()

/*
@route      POST api/users
@desc       Register user
@access     Public
*/
router.post("/",[
    check("username", "Username is required").not().isEmpty(),
    check("email","Email is not valid").isEmail(),
    check("password","Please enter a password with 6 or more alphanumeric characters").isLength({min:6})
    ],
    async (req,res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        
        // Check if user exists
        const queryResult = await User.findOne({email:req.body.email})

        if(queryResult){
            return res.status(400).json({msg:"User already exists"})
        }

        // Gravatar url
        const gravatarUrl = await gravatar.url(req.body.email,{protocol: 'https', s: '100'})

        // Encrypt password
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt); 
        
        // Return jsonwebtoken
        const data = {
            username: req.body.username,
            password: hashPassword,
            email: req.body.email,
            gravatar: gravatarUrl
        }

        console.log(data);
        res.send("Post route")
})

export default router