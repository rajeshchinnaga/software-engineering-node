import BookmarkDao from "../daos/BookmarkDao";
import Bookmark from "../models/Bookmark";
import {Express, Request, Response} from "express";
import BookmarkControllerI from "../interfaces/BookmarkControllerI";

export default class BookmarkController implements BookmarkControllerI {
    private static bookmarkDao: BookmarkDao = BookmarkDao.getInstance();
    private static bookmarkController: BookmarkController | null = null;
    public static getInstance = (app: Express): BookmarkController => {
        if (BookmarkController.bookmarkController === null) {
            BookmarkController.bookmarkController = new BookmarkController();
            app.get("/api/bookmarks", BookmarkController.bookmarkController.findAllBookmarkedTuits);
            app.get("/api/users/:uid/bookmarks", BookmarkController.bookmarkController.findAllTuitsBookmarkedByUser);
            app.get("/api/bookmarks/:tid", BookmarkController.bookmarkController.findAllUsersWhoBookmarkedTuit);
            app.post("/api/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.userBookmarksTuit);
            app.delete("/api/users/:uid/bookmarks/:tid", BookmarkController.bookmarkController.userUnbookmarksTuit);
        }
        return BookmarkController.bookmarkController;
    }

    private constructor() {
    }

    findAllBookmarkedTuits = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.findAllBookmarkedTuits()
            .then((bookmarks: Bookmark[]) => res.json(bookmarks));
    findAllTuitsBookmarkedByUser = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.findAllTuitsBookmarkedByUser(req.params.uid)
            .then((tuits: Bookmark[]) => res.json(tuits));
    findAllUsersWhoBookmarkedTuit = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.findAllUsersWhoBookmarkedTuit(req.params.tid)
            .then((users: Bookmark[]) => res.json(users));
    userBookmarksTuit = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.userBookmarksTuit(req.params.tid, req.params.uid)
            .then((bookmark: Bookmark) => res.json(bookmark));
    userUnbookmarksTuit = (req: Request, res: Response) =>
        BookmarkController.bookmarkDao.userUnbookmarksTuit(req.params.tid, req.params.uid)
            .then((bookmark: Bookmark) => res.json(bookmark));
};