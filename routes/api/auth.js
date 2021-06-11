import { Router } from "express"
import auth from "../../middleware/auth.js"
import User from "../../models/User.js"

const router = Router()

/*
@route      GET api/auth
@desc       Get info
@access     Public
*/
router.get("/",auth,async (req,res)=>{
    try {
        // Used user id returned from token to fetch all data except password
        const user = await User.findById(req.user.id).select("-password")
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

export default router