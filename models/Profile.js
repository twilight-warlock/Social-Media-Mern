import mongoose from "mongoose";
import User from "./User.js"

const {Schema, model} = mongoose

const profileSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    headline:{
        type:String,
    },
    summary:{
        type:String,
    },
    website:{
        type:String
    },
    location:{
        type: String
    },
    githubUsername:{
        type: String
    },
    skills:{
        type: [String],
        required: true
    },
    experience: [
        {
            role: {
                type: String,
                required: true
            },
            companyName:{
                type:String,
                required: true
            },
            employmentType: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            startDate: {
                type: Date,
                required: true
            },
            endDate: {
                type: Date
            },
            current:{
                type: Boolean,
                default: false
            },
            description:{
                type: String
            }
        }
    ],
    education: [
        {
            universityName: {
                type: String,
                required: true
            },
            degree:{
                type: String,
                required: true
            },
            fieldOfStudy:{
                type: String,
                required: true
            },
            startDate: {
                type: Date,
                required: true
            },
            endDate: {
                type: Date
            },
            current:{
                type: Boolean,
                default: false
            },
            grade:{
                type: String
            },
            description:{
                type: String
            }
        }
    ],
    projects:[
        {
            title: {
                type: String,
                required: true
            },
            description:{
                type: String,
                required: true
            },
            projectLink:{
                type:String
            },
            imageUrl:{
                type: String
            }
        }
    ],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
        linkedin: {
            type: String
        },
        medium: {
            type: String
        },
        devto: {
            type: String
        },
        facebook: {
            type: String
        },
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
})

const Profile = model("profile",profileSchema)

export default Profile