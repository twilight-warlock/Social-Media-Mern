import { Router } from "express";
import auth from "../../../middleware/auth.js";
import Profile from "../../../models/Profile.js";
import User from "../../../models/User.js";
import { check, validationResult } from "express-validator";
import normalize from "normalize-url";

const router = Router();
/*
@route      POST api/profile
@desc       Create/update user's profile
@access     Private
*/
router.post(
	"/",
	[
		auth,
		[
			check("headline", "Headline is required").not().isEmpty(),
			check("skills", "Skills field is required").not().isEmpty(),
		],
	],
	async (req, res) => {
		const checkErrors = validationResult(req);
		if (!checkErrors.isEmpty()) {
			return res.status(400).json({ errors: checkErrors.array() });
		}

		const {
			headline,
			summary,
			website,
			location,
			githubUsername,
			skills,
			youtube,
			twitter,
			instagram,
			linkedin,
			medium,
			devto,
			facebook,
		} = req.body;

		// Creating profile object
		let profileFields = {};
		profileFields.user = req.user.id;
		if (headline) profileFields.headline = headline;
		if (summary) profileFields.summary = summary;
		if (website)
			profileFields.website = normalize(website, { forceHttps: true });
		if (location) profileFields.location = location;
		if (githubUsername) profileFields.githubUsername = githubUsername;

		profileFields.social = {};
		if (youtube)
			profileFields.social.youtube = normalize(youtube, { forceHttps: true });
		if (twitter)
			profileFields.social.twitter = normalize(twitter, { forceHttps: true });
		if (devto)
			profileFields.social.devto = normalize(devto, { forceHttps: true });
		if (instagram)
			profileFields.social.instagram = normalize(instagram, {
				forceHttps: true,
			});
		if (linkedin)
			profileFields.social.linkedin = normalize(linkedin, { forceHttps: true });
		if (medium)
			profileFields.social.medium = normalize(medium, { forceHttps: true });
		if (facebook)
			profileFields.social.facebook = normalize(facebook, { forceHttps: true });

		if (skills)
			profileFields.skills = skills.split(",").map((skill) => skill.trim());

		try {
			let profile = await Profile.findOne({ user: req.user.id });

			const user = await User.findOne({ _id: req.user.id });
			if (!user) {
				return res.status(400).json({ msg: "User not found" });
			}

			// Update
			if (profile) {
				profile = await Profile.findOneAndUpdate(
					{ user: req.user.id }, // find by
					{ $set: profileFields }, // values to set
					{ new: true } // to return object after update was applied
				);

				return res.json({ profile });
			}

			// Create a new profile
			profile = new Profile(profileFields);
			await profile.save();

			res.json(profile);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

export default router;
