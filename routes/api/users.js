import { Router } from "express"

const router = Router()

/*
@route      GET api/users
@desc       Get info
@access     Public
*/
router.get("/",(req,res)=>res.send("User route"))

export default router