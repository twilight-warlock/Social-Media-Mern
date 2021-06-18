import { Router } from "express";
import auth from "../../../middleware/auth.js";
import Post from "../../../models/Post.js";

const router = Router();

/*
@route      PUT api/posts/like/:post_id
@desc       Like a post
@access     Private
*/
router.put("/like/:post_id", auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}

		// Check if the post is already liked
		if (
			post.likes.filter((like) => like.user.toString() === req.user.id).length >
			0
		) {
			return res.status(400).json({ msg: "Post has been liked already" });
		}

		post.likes.unshift({ user: req.user.id });

		await post.save();

		res.json(post.likes);
	} catch (err) {
		console.error(err);
		if (err.kind === "ObjectId") {
			return res.status(404).json({ msg: "Post not found" });
		}
		res.status(500).json({ msg: "Server error" });
	}
});

/*
@route      PUT api/posts/unlike/:post_id
@desc       Like a post
@access     Private
*/
router.put("/unlike/:post_id", auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}

		// Check if the post is already liked
		if (
			post.likes.filter((like) => like.user.toString() === req.user.id)
				.length === 0
		) {
			return res.status(400).json({ msg: "Post has not been liked" });
		}

		post.likes = post.likes.filter(
			(like) => like.user.toString() !== req.user.id
		);

		await post.save();

		res.json(post.likes);
	} catch (err) {
		console.error(err);
		if (err.kind === "ObjectId") {
			return res.status(404).json({ msg: "Post not found" });
		}
		res.status(500).json({ msg: "Server error" });
	}
});

export default router;
