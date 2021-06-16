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
		if (error && error.details[0].message) {
			console.error(error.details[0].message);
			return res.status(400).json({ msg: error.details[0].message });
		}
		console.error(error);
		res.status(500).json({ msg: "Server error" });
	}
});

/*
@route      GET api/posts
@desc       Get all post
@access     Private
*/
router.get("/", auth, async (req, res) => {
	try {
		// Descending order first
		const posts = await Post.find().sort({ timestamp: -1 });
		res.json(posts);
	} catch (err) {
		console.error(err);
		res.status(500).json({ msg: "Server error" });
	}
});

/*
@route      GET api/posts/:post_id
@desc       Get post by id
@access     Private
*/
router.get("/:post_id", auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}

		res.json(post);
	} catch (err) {
		console.error(err);
		if (err.kind === "ObjectId") {
			return res.status(404).json({ msg: "Post not found" });
		}
		res.status(500).json({ msg: "Server error" });
	}
});

/*
@route      DELETE api/posts/:post_id
@desc       de lete a post by id
@access     Private
*/
router.delete("/:post_id", auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}

		// If user owns the post, only then delete
		if (post.user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "User not authorized" });
		}

		//  To remove post
		await post.remove();

		res.json({ msg: "Post deleted" });
	} catch (err) {
		console.error(err);
		if (err.kind === "ObjectId") {
			return res.status(404).json({ msg: "Post not found" });
		}
		res.status(500).json({ msg: "Server error" });
	}
});

export default router;
