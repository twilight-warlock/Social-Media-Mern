import express from "express";
import connectDb from "./config/connectToDatabase.js";
import userRoutes from "./routes/api/users/users.js";
import profileRoutes from "./routes/api/profile/index.js";
import authRoutes from "./routes/api/auth/auth.js";
import postsRoutes from "./routes/api/posts/index.js";
import path from "path";

const app = express();

// Connecting to database
connectDb();

// Initialize middleware
app.use(express.json({ extended: false }));

// Defining routes
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
	// public folder
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

// Port and server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
