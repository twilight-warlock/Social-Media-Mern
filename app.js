import express from "express";
import connectDb from "./config/connectToDatabase.js"
import userRoutes from "./routes/api/users.js"
import profileRoutes from "./routes/api/profile.js"
import authRoutes from "./routes/api/auth.js"
import postsRoutes from "./routes/api/posts.js"

const app = express()

// Connecting to database
connectDb()

// Initialize middleware
app.use(express.json({extended: false}))

app.get("/",(req,res)=>res.send("Connected"))

// Defining routes
app.use("/api/users",userRoutes)
app.use("/api/profile",profileRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/posts",postsRoutes)

// Port and server
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))