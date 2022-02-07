import mongoose from 'mongoose'
import LocationSchema from "./LocationSchema";

const UserSchema = new mongoose.Schema({
    username: {type: String, unique : true,required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    profilePhoto: String,
    headerImage: String,
    accountType: {type: String, default: 'PERSONAL', enum:['PERSONAL', 'ACADEMIC', 'PROFESSIONAL']},
    maritalStatus: {type: String, default: 'SINGLE', enum:['SINGLE','MARRIED','WIDOWED']},
    biography: String,
    dateOfBirth: Date,
    joined: {type:Date, default:Date.now},
    location: LocationSchema
}, {collection: 'users'});

export default UserSchema;