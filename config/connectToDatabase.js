import mongoose from "mongoose"
import config from "config"

// To get MongoDB url from confid module aka default.json
const db = config.get("mongoURI")

const connectDb = async () => {
    try {
        await mongoose.connect(db,{ 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false 
        })
        
        console.log("MongoDB connected");
    } catch (err) {
        // Prinitng the error
        console.error(err.message)

        // Exit process with failure - 1
        process.exit(1)
    }
}

export default connectDb
