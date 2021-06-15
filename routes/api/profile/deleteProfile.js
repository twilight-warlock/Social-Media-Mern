import { Router } from "express";
import Profile from "../../../models/Profile.js";
import User from "../../../models/User.js";
import auth from "../../../middleware/auth.js";

const router = Router();

/*
@route      DELETE api/profile
@desc       delete user, profile and posts
@access     Private
*/
router.delete("/", auth, async (req, res) => {
	try {
		// To remove user's account
		await User.findOneAndRemove({ _id: req.user.id });

		// To remove profile
		await Profile.findOneAndRemove({ user: req.user.id });

		//  To remove user's posts

		res.json({ msg: "Account deleted" });
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

export default router;
