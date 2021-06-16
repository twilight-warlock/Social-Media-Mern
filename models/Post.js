import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "user",
	},
	caption: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
	},
	name: {
		type: String,
	},
	avatar: {
		type: String,
	},
	likes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: "user",
			},
		},
	],
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: "user",
			},
			comment: {
				type: String,
				required: true,
			},
			name: {
				type: String,
				required: true,
			},
			avatar: {
				type: String,
				required: true,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

const Posts = model("post", PostSchema);

export default Posts;
