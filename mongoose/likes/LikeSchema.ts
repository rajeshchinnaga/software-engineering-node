/**
 * @file Implements mongoose Schema for Likes.
 */
import mongoose, {Schema} from "mongoose";
import Like from "../../models/likes/Like";

/**
 * @typedef Like represents user likes tuits.
 * @property {ObjectId[]} tuit Array of tuit's
 * @property {ObjectId[]} likedBy Array of UsersID's
 */
const LikeSchema = new mongoose.Schema<Like>({
    tuit: {type:Schema.Types.ObjectId, ref: 'TuitModel'},
    likedBy: {type: Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'likes'});

export default LikeSchema;