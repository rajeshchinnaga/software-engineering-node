import FollowControllerI from "../interfaces/FollowControllerI";
import FollowDao from "../daos/FollowDao";
import {Express, Request, Response} from "express";
import Follow from "../models/Follow";
export default class FollowController implements FollowControllerI{
    private static followDao : FollowDao = FollowDao.getInstance();
    private static followController : FollowController | null = null;
    public static getInstance = (app : Express) : FollowController => {
        if (FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.post("/api/users/:uid/following/:userId", FollowController.followController.userFollowsAnotherUser);
            app.delete("/api/users/:uid/following/:userId", FollowController.followController.userUnfollowsAnotherUser);
            app.get("/api/users/:uid/followers", FollowController.followController.findAllFollowersOfUser);
            app.get("/api/users/:uid/following", FollowController.followController.findAllFollowingOfUser);
        }
        return FollowController.followController;
    }

    private constructor() {}

    findAllFollowersOfUser = (req:Request, res:Response) =>
        FollowController.followDao.findAllFollowersOfUser(req.params.uid)
            .then((followers:Follow[]) => res.json(followers));

    findAllFollowingOfUser = (req:Request, res:Response) =>
        FollowController.followDao.findAllFollowingOfUser(req.params.uid)
            .then((following:Follow[]) => res.json(following));

    userFollowsAnotherUser = (req:Request, res:Response) =>
        FollowController.followDao.userFollowsAnotherUser(req.params.userId, req.params.uid)
            .then((follow:Follow) => res.json(follow));

    userUnfollowsAnotherUser = (req:Request, res:Response) =>
        FollowController.followDao.userUnfollowsAnotherUser(req.params.userId, req.params.uid)
            .then((status) => res.send(status));
};