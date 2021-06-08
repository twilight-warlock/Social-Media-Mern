import express from "express";
import connectDb from "./config/connectToDatabase.js"

const app = express()

// Connecting to database
connectDb()

app.get("/",(req,res)=>res.send("Connected"))

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))