import Bookmark from "../../models/bookmarks/Bookmark";

export default interface BookmarkDao {
    findAllTuitsBookmarkedByUser(uid: string): Promise<Bookmark[]>;
    userBookmarksTuit(tid: string, uid: string): Promise<any>;
    userUnBookmarksTuit(tid: string, uid: string): Promise<any>;
}