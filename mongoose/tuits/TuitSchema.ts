/**
 * @file Implements mongoose Schema for tuits.
 */
import mongoose from 'mongoose'
import Tuit from "../../models/tuits/Tuit";
import {Schema} from "mongoose";
import UserModel from "../users/UserModel";
import UserSchema from "../users/UserSchema";

/**
 * @typedef Tuit represents user posts tuits.
 * @property {ObjectId[]} postedBy Array of User's
 * @property {Date} postedOn date the tuit posted.
 */
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: 'UserModel'},
    postedOn: {type: Date, default: Date.now}
}, {collection: 'tuits'});

export default TuitSchema;