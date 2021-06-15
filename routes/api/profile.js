import { Router } from "express"
import auth from "../../middleware/auth.js"
import Profile from "../../models/Profile.js"

const router = Router()

/*
@route      GET api/profile/me
@desc       Get Logged in user's data
@access     Private
*/
router.get("/me",auth,async(req,res)=>{
    try {
        // Use the token to get profile and 
        // populate method to get data from user collection with
        // the fields passewd in []
        const profile = await Profile.findOne({user: req.user.id}).populate("user",["name","avatar"])
        
        if(!profile){
            return res.status(400).json({msg: "Profile not found for this user"})
        }

        res.json(profile)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error")
    }
})

export default router