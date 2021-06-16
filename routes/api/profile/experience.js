import { Router } from "express";
import Profile from "../../../models/Profile.js";
import auth from "../../../middleware/auth.js";
import joi from "joi";

const router = Router();
/*
@route      PUT api/profile/experience
@desc       Add experience
@access     Private
*/
router.put("/experience", auth, async (req, res) => {
	const {
		role,
		companyName,
		startDate,
		employmentType,
		location,
		endDate,
		description,
		current,
	} = req.body;

	try {
		await joi
			.object({
				role: joi.string().min(3).max(40).required(),
				companyName: joi.string().min(3).required(),
				startDate: joi.date().required(),
			})
			.validateAsync({ role, companyName, startDate });

		// Used with .validate and not with validateAsync
		// if (error) {
		// 	return res.status(400).json({ msg: error.details[0].message });
		// }

		const newExp = {
			role,
			companyName,
			startDate,
			employmentType,
			location,
			endDate,
			description,
			current,
		};

		const profile = await Profile.findOne({ user: req.user.id });
		profile.experience.unshift(newExp);

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
@route      DELETE api/profile/experience/:exp_id
@desc       delete experience
@access     Private
*/
router.delete("/experience/:exp_id", auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });
		const oldLength = profile.experience.length;

		// method 1
		profile.experience = profile.experience.filter(
			(exp) => exp._id != req.params.exp_id
		);

		if (profile.experience.length === oldLength) {
			return res.status(400).json({ msg: "Experience data not found" });
		}

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
});

export default router;
