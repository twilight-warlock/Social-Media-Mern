import { Router } from "express";
import Profile from "../../../models/Profile.js";

const router = Router();

/*
@route      GET api/profile
@desc       Get all the profiles in the collection
@access     Public
*/
router.get("/", async (req, res) => {
	try {
		const profiles = await Profile.find().populate("user", [
			"username",
			"avatar",
		]);
		res.json(profiles);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

export default router;
