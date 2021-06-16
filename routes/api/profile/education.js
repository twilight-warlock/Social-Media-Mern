import { Router } from "express";
import Profile from "../../../models/Profile.js";
import auth from "../../../middleware/auth.js";
import joi from "joi";

const router = Router();
/*
@route      PUT api/profile/education
@desc       Add education
@access     Private
*/
router.put("/education", auth, async (req, res) => {
	const {
		degree,
		universityName,
		startDate,
		fieldOfStudy,
		location,
		endDate,
		description,
		current,
		grade,
	} = req.body;

	try {
		await joi
			.object({
				degree: joi.string().min(3).max(40).required(),
				universityName: joi.string().min(3).required(),
				startDate: joi.date().required(),
			})
			.validateAsync({ degree, universityName, startDate });

		const newEducation = {
			degree,
			universityName,
			startDate,
			fieldOfStudy,
			location,
			endDate,
			description,
			current,
			grade,
		};

		const profile = await Profile.findOne({ user: req.user.id });
		profile.education.unshift(newEducation);

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
@route      DELETE api/profile/education/:edu_id
@desc       delete education
@access     Private
*/
router.delete("/education/:edu_id", auth, async (req, res) => {
	try {
		const profile = await Profile.findOne({ user: req.user.id });

		// method 2
		const indexVal = profile.education
			.map((edu) => edu.id)
			.indexOf(req.params.edu_id);

		if (indexVal == -1) {
			return res.status(400).json({ msg: "Education data not found" });
		}
		profile.education.splice(indexVal, 1);

		await profile.save();

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server error" });
	}
});

export default router;
