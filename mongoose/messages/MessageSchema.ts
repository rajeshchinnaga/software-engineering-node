/**
 * @file Implements mongoose Schema for Messages.
 */
import mongoose, {Schema} from "mongoose";
import Message from "../../models/messages/Message";

/**
 * @typedef Message represents user messages users.
 * @property {string} message Message to sent to user
 * @property {ObjectId[]} messageSentBy Array of UserID's
 * @property {ObjectId[]} messageSentTo Array of UsersID's
 * @property {Date} messageSentOn date the message sent
 */
const MessageSchema = new mongoose.Schema<Message>({
    message: {type: String, required: true},
    messageSentBy: {type: Schema.Types.ObjectId, ref: 'UserModel'},
    messageSentTo: {type: Schema.Types.ObjectId, ref: 'UserModel'},
    messageSentOn: {type: Date, default: Date.now}
}, {collection: 'message'});

export default MessageSchema;