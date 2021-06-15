import { Router } from "express";
import Profile from "../../../models/Profile.js";

const router = Router();

/*
@route      GET api/profile/user/user:id
@desc       Get profile by the passed user id
@access     Public
*/
router.get("/user/:user_id", async (req, res) => {
	try {
		const profile = await Profile.findOne({
			user: req.params.user_id,
		}).populate("user", ["username", "avatar"]);

		// Check if user exists
		if (!profile) {
			return res.status(400).json({ msg: "Profile not found" });
		}

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		if (err.kind == "ObjectId")
			return res.status(400).json({ msg: "Profile not found" });
		res.status(500).send("Server Error");
	}
});

export default router;
