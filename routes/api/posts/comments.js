import { Router } from "express";
import auth from "../../../middleware/auth.js";
import joi from "joi";
import User from "../../../models/User.js";
import Post from "../../../models/Post.js";

const router = Router();

/*
@route      PUT api/posts/comment/:post_id
@desc       Comment on a post
@access     Private
*/
router.put("/comment/:post_id", auth, async (req, res) => {
	const { comment } = req.body;

	try {
		await joi
			.object({
				comment: joi.string().required(),
			})
			.validateAsync({ comment });

		const user = await User.findById(req.user.id).select("-password");
		const post = await Post.findById(req.params.post_id);

		const newComment = {
			comment,
			name: user.username,
			avatar: user.avatar,
			user: req.user.id,
		};

		post.comments.unshift(newComment);

		await post.save();

		res.json(post.comments);
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
@route      DELETE api/posts/:post_id/:comment_id
@desc       delete a comment
@access     Private
*/
router.delete("/comment/:post_id/:comment_id", auth, async (req, res) => {
	try {
		const post = await Post.findById(req.params.post_id);

		if (!post) {
			return res.status(404).json({ msg: "Post not found" });
		}

		const comment = post.comments.filter(
			(comment) => comment.id === req.params.comment_id
		);

		if (!comment) {
			return res.status(404).json({ msg: "Comment not found" });
		}

		// If user owns the comment, then delete
		if (comment[0].user.toString() !== req.user.id) {
			return res.status(401).json({ msg: "User not authorized" });
		}

		//  To remove comment
		const removeIndex = post.comments
			.map((com) => com.user.toString())
			.indexOf(req.user.id);

		post.comments.splice(removeIndex, 1);

		await post.save();

		res.json(post.comments);
	} catch (err) {
		console.error(err);
		if (err.kind === "ObjectId") {
			return res.status(404).json({ msg: "Post not found" });
		}
		res.status(500).json({ msg: "Server error" });
	}
});

export default router;
