import { Router } from "express"
import { check, validationResult} from "express-validator"
import User from "../../models/User.js"
import gravatar from "gravatar"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import config from "config"

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

        const {username, email, password} = req.body

        try {
            // Check if user exists
            let queryResult = await User.findOne({email})
    
            if(queryResult){
                return res.status(400).json({errors : [{msg:"User already exists"}]})
            }
    
            // Gravatar url
            const gravatarUrl = await gravatar.url(email,{protocol: 'https', s: '100', r: 'pg', d: 'mm'})
    
            // Encrypt password
            const salt = await bcrypt.genSaltSync(10);
            const hashPassword = await bcrypt.hashSync(password, salt); 
            
            // Create a new user
            queryResult = new User({
                email,
                username,
                avatar: gravatarUrl,
                password: hashPassword
            })
    
            // Save the new user
            await queryResult.save()

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: queryResult.id
                }
            }

            // Using payload to create encoded token
            jwt.sign(
                payload, 
                config.get("jsonWebTokenSecret"), 
                {expiresIn: config.get("expiresIn")},
                (err,token) => {
                    if(err){
                        throw err;
                    }
                    res.json({token})
                }
            )
            
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error")
        }
})

export default router