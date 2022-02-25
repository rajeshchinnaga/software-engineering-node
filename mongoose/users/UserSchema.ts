/**
 * @file Implements mongoose Schema for Users.
 */
import mongoose from 'mongoose'
import LocationSchema from "../LocationSchema";

/**
 * @property {string} username username to be used to login to the tuiter applciation
 * @property {string} password password to be used to authenticate the user to login to
 * tuiter applciation
 * @property {string} firstName first name of the user
 * @property {string} lastName last name of the user
 * @property {string} email email of the user
 * @property {string} profilePhoto profile picture of the user
 * @property {string} headerImage header picture of the user
 * @property {string} accountType type of the account of the user
 * @property {string} maritalStatus marital status of the user
 * @property {string} biography some bio informartion of the user
 * @property {Date} dateOfBirth DOB of the user
 * @property {Date} joined user joined the tuiter
 * @property {LocationSchema} location location of the user
 */
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