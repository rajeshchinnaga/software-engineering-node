import Bookmark from "../models/Bookmark";

/**
 * @file Declares API for Bookmarks related data access object methods
 */
export default interface BookmarkDaoI {
    userBookmarksTuit (tuitId: string, userId: string): Promise<any>;
    userUnbookmarksTuit (tuitId: string, userId: string): Promise<any>;
    findTuitsBookmarkedByUser (uid: string): Promise<Bookmark[]>;
    findUsersBookmarkATuit (tuitId: string): Promise<Bookmark[]>;
    findAllBookmarkedTuits (): Promise<Bookmark[]>;
};