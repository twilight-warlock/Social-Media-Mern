import { Router } from "express";
import auth from "../../../middleware/auth.js";
import User from "../../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import { check, validationResult } from "express-validator";

const router = Router();

/*
@route      GET api/auth
@desc       Get info
@access     Public
*/
router.get("/", auth, async (req, res) => {
	try {
		// Used user id returned from token to fetch all data except password
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

/*
@route      POST api/auth
@desc       Return token
@access     Public
*/
router.post(
	"/",
	[
		check("email", "Email is not valid").isEmail(),
		check("password", "Password is required").exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;

		try {
			// Check if user exists
			let queryResult = await User.findOne({ email });

			// If user does not exist
			if (!queryResult) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Entered invalid credentials" }] });
			}

			// Using bcrypt to compare inputted password and password from db
			const passwordCompare = await bcrypt.compare(
				password,
				queryResult.password
			);

			if (!passwordCompare) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Entered invalid credentials" }] });
			}

			// Return jsonwebtoken
			const payload = {
				user: {
					id: queryResult.id,
				},
			};

			// Using payload to create encoded token
			jwt.sign(
				payload,
				config.get("jsonWebTokenSecret"),
				{ expiresIn: config.get("expiresIn") },
				(err, token) => {
					if (err) {
						throw err;
					}
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server error");
		}
	}
);

export default router;
