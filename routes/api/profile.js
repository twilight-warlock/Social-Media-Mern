import { Router } from "express";
import auth from "../../middleware/auth.js";
import Profile from "../../models/Profile.js";
import { check, validationResult } from "express-validator";

const router = Router();

/*
@route      GET api/profile/me
@desc       Get Logged in user's data
@access     Private
*/
router.get("/me", auth, async (req, res) => {
	try {
		// Use the token to get profile and
		// populate method to get data from user collection with
		// the fields passewd in []
		const profile = await Profile.findOne({ user: req.user.id }).populate(
			"user",
			["name", "avatar"]
		);

		if (!profile) {
			return res.status(400).json({ msg: "Profile not found for this user" });
		}

		res.json(profile);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

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
		if (website) profileFields.website = website;
		if (location) profileFields.location = location;
		if (githubUsername) profileFields.githubUsername = githubUsername;

		profileFields.social = {};
		if (youtube) profileFields.social.youtube = youtube;
		if (twitter) profileFields.social.twitter = twitter;
		if (devto) profileFields.social.devto = devto;
		if (instagram) profileFields.social.instagram = instagram;
		if (linkedin) profileFields.social.linkedin = linkedin;
		if (medium) profileFields.social.medium = medium;
		if (facebook) profileFields.social.facebook = facebook;

		if (skills)
			profileFields.skills = skills.split(",").map((skill) => skill.trim());

		try {
			let profile = await Profile.findOne({ user: req.user.id });

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
