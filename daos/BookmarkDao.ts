import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import Bookmark from "../models/Bookmark";
import BookmarkModel from "../mongoose/BookmarkModel";

/**
 * Implements Data Access Object managing data storage
 * of Bookmarks
 * @implements {BookmarkDaoI} BookmarkDaoI
 * @property {BookmarkDao} bookmarkDao Private single instance of BookmarkDao
 */
export default class BookmarkDao implements BookmarkDaoI {
    private static bookmarkDao: BookmarkDao | null = null;
    public static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {}
    userBookmarksTuit = async (tuitId: string, userId: string): Promise<any> =>
        BookmarkModel.create({bookmarkedTuit: tuitId, bookmarkedBy: userId})

    userUnbookmarksTuit = async (tuitId: string, userId: string): Promise<any> =>
        BookmarkModel.deleteOne({bookmarkedTuit:tuitId, bookmarkedBy:userId})

    findAllTuitsBookmarkedByUser = async (userId: string): Promise<Bookmark[]> =>
        BookmarkModel.find({bookmarkedBy:userId}).populate("bookmarkedTuit").exec();

    findAllUsersWhoBookmarkedTuit = async (tuitId: string): Promise<Bookmark[]> =>
        BookmarkModel.find({bookmarkedTuit:tuitId}).populate("bookmarkedBy").exec();

    findAllBookmarkedTuits = async (): Promise<Bookmark[]> =>
        BookmarkModel.find()
};