import { Router } from "express";
import auth from "../../../middleware/auth.js";
import joi from "joi";
import User from "../../../models/User.js";
import Post from "../../../models/Post.js";

const router = Router();

/*
@route      POST api/posts
@desc       Create a post
@access     Private
*/
router.post("/", auth, async (req, res) => {
	const { caption, imageUrl } = req.body;

	try {
		await joi
			.object({
				caption: joi.string().required(),
			})
			.validateAsync({ caption });

		const user = await User.findById(req.user.id).select("-password");

		const newPost = {
			caption,
			name: user.username,
			avatar: user.avatar,
			user: req.user.id,
		};

		if (imageUrl) newPost.imageUrl = imageUrl;

		const post = new Post(newPost);
		await post.save();

		res.json(post);
	} catch (error) {
		console.log(error);
		if (error && error.details[0].message) {
			console.error(error.details[0].message);
			return res.status(400).json({ msg: error.details[0].message });
		}
		console.error(error);
		res.status(500).json({ msg: "Server error" });
	}

	res.send("Posts route");
});

export default router;
