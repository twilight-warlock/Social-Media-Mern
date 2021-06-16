import { Router } from "express";
import Profile from "../../../models/Profile.js";
import auth from "../../../middleware/auth.js";
import joi from "joi";

const router = Router();
/*
@route      PUT api/profile/projects
@desc       Add projects
@access     Private
*/
router.put("/projects", auth, async (req, res) => {
	const { title, description, imageUrl, projectLink } = req.body;

	try {
		await joi
			.object({
				title: joi.string().min(3).max(40).required(),
				description: joi.string().min(3).required(),
				imageUrl: joi.string().min(3).required(),
				projectLink: joi.string().min(3).required(),
			})
			.validateAsync({ title, description, imageUrl, projectLink });

		const newExp = {
			title,
			description,
			imageUrl,
			projectLink,
		};

		const profile = await Profile.findOne({ user: req.user.id });
		profile.projects.unshift(newExp);

		await profile.save();

		res.json(profile);
	} catch (error) {
		if (error && error.details[0].message) {
			console.error(error.details[0].message);
			return res.status(400).json({ msg: error.details[0].message });
		}
		console.error(error);
		res.status(500).json({ msg: "Server error" });
	}
});

/*
@route      DELETE api/profile/projects/:proj_id
@desc       delete projects
@access     Private
*/
router.delete("/projects/:proj_id", auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });
		const oldLength = profile.projects.length;

		// method 1
		profile.projects = profile.projects.filter(
			(proj) => proj._id != req.params.proj_id
		);

		if (profile.projects.length === oldLength) {
			return res.status(400).json({ msg: "Project data not found" });
		}

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
});

export default router;
