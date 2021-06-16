import { Router } from "express";
import axios from "axios";
import config from "config";

const router = Router();

/*
@route      GET api/profile/github/:username
@desc       Get passed username's repos
@access     Public
*/
router.get("/github/:username", async (req, res) => {
	try {
		// Encoded the github api url
		const uri = encodeURI(
			`https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`
		);

		// Passing required headers
		const headers = {
			"user-agent": "node.js",
			Authorization: `token ${config.get("githubToken")}`,
		};

		// Request to fetch data
		const gitHubResponse = await axios.get(uri, { headers });

		return res.json(gitHubResponse.data);
	} catch (err) {
		console.error(err.message);
		return res.status(404).json({ msg: "No Github profile found" });
	}
});

export default router;
