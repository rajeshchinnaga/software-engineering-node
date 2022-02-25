/**
 * @file Implements mongoose model to CRUD documents in the bookmarks collection.
 */
import * as mongoose from "mongoose";
import BookmarkSchema from "./BookmarkSchema";

const BookmarkModel = mongoose.model('BookmarkModel', BookmarkSchema)

export default BookmarkModel;