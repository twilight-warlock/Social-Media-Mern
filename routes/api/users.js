import { Router } from "express"
import { check, validationResult} from "express-validator"

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

(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    console.log(req.body);
    res.send("Post route")
})

export default router