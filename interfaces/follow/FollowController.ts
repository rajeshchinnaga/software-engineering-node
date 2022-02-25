import {Request, Response} from "express";


export default interface BookmarkController{
    findAllFollowingUsers(req: Request, res: Response): void;
    findAllFollowers(req: Request, res: Response): void;
    userFollowsAnotherUser(req: Request, res: Response): void;
    userUnfollowsAnotherUser(req: Request, res: Response): void;
};