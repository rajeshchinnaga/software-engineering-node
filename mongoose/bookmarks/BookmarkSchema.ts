/**
 * @file Implements mongoose Schema for bookmarks.
 */
import mongoose, {Schema} from "mongoose";
import Bookmark from "../../models/bookmarks/Bookmark";

/**
 * @typedef Bookmark represents bookmarked tuits.
 * @property {ObjectId[]} tuit Array of tuit's
 * @property {ObjectId[]} bookMarkedBy Array of UsersID's
 */
const BookmarkSchema = new mongoose.Schema<Bookmark>({
    tuit: {type:Schema.Types.ObjectId, ref: 'TuitModel'},
    bookMarkedBy: {type: Schema.Types.ObjectId, ref: 'UserModel'},
}, {collection: 'bookmarks'});

export default BookmarkSchema;