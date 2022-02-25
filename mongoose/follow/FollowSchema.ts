/**
 * @file Implements mongoose Schema for folows.
 */
import mongoose, {Schema} from "mongoose";
import Follow from "../../models/follow/Follow";

/**
 * @typedef Follow represents user follows users.
 * @property {ObjectId[]} userFollower Array of UserID's
 * @property {ObjectId[]} userFollowing Array of UsersID's
 */
const FollowSchema = new mongoose.Schema<Follow>({
    userFollower: {type:Schema.Types.ObjectId, ref: 'UserModel'},
    userFollowing: {type: Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'follow'});

export default FollowSchema;