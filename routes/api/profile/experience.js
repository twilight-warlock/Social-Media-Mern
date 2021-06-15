import { Router } from "express";
import Profile from "../../../models/Profile.js";
import User from "../../../models/User.js";
import auth from "../../../middleware/auth.js";
import joi from "joi";

const router = Router();

const schema =
	/*
@route      PUT api/profile
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

export default router;
