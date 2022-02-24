import Bookmark from "../models/Bookmark";

/**
 * @file Declares API for Bookmarks related data access object methods
 */
export default interface BookmarkDaoI {
    userBookmarksTuit (tuitId: string, userId: string): Promise<any>;
    userUnbookmarksTuit (tuitId: string, userId: string): Promise<any>;
    findAllTuitsBookmarkedByUser (userId: string): Promise<Bookmark[]>;
    findAllUsersWhoBookmarkedTuit (tuitId: string): Promise<Bookmark[]>;
    findAllBookmarkedTuits (): Promise<Bookmark[]>;
};