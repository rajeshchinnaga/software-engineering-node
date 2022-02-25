/**
 * @file Controller RESTful Web service API for Follow resource
 */
import {Express, Request, Response} from "express";
import FollowDao from "../daos/FollowDao";
import FollowControllerI from "../interfaces/follow/FollowController"

/**
 * @class FollowController Implements RESTful Web service API for Follow resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /users/:uid/following to retrieve all the users the user is following
 *     </li>
 *     <li>GET /users/:uid/followers to retrieve all the users follows the user.
 *     </li>
 *     <li>POST /users/:sourceuid/following/:targetuid to record that a user follows another user
 *     </li>
 *     <li>DELETE /users/:sourceuid/unfollowing/:targetuid to record that a user
 *     no longer follows another tuit</li>
 * </ul>
 * @property {FollowDao} followDao Singleton DAO implementing Follow CRUD operations
 * @property {FollowController}  FollowController Singleton controller implementing
 * RESTful Web service API
 */
export default class FollowController implements FollowControllerI {
    private static followDao: FollowDao = FollowDao.getInstance();
    private static followController: FollowController | null = null;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     * @return FollowController
     */
    public static getInstance = (app: Express): FollowController => {
        if (FollowController.followController === null) {
            FollowController.followController = new FollowController();
            app.post("/users/:sourceuid/following/:targetuid",
                FollowController.followController.userFollowsAnotherUser);
            app.delete("/users/:sourceuid/unfollowing/:targetuid",
                FollowController.followController.userUnfollowsAnotherUser);
            app.get("/users/:uid/following",
                FollowController.followController.findAllFollowingUsers);
            app.get("/users/:uid/followers",
                FollowController.followController.findAllFollowers);
        }
        return FollowController.followController;
    }

    private constructor() {
    }

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters sourceuid and targetuid representing the user that is following another user
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new following user that was inserted in the
     * database.
     */
    userFollowsAnotherUser = (req: Request, res: Response) =>
        FollowController.followDao.
        userFollowsAnotherUser(req.params.sourceuid, req.params.targetuid)
            .then(follow => res.json(follow));


    /**
     * @param {Request} req Represents request from client, including the
     * path parameters sourceuid and targetuid representing the user that is unfollowing
     * anorther user and the user being unfollowed
     * @param {Response} res Represents response to client, including status
     * on whether unfollowing the user was successful or not
     */
    userUnfollowsAnotherUser = (req: Request, res: Response) =>
        FollowController.followDao.
        userUnfollowsAnotherUser(req.params.sourceuid, req.params.targetuid)
            .then(status => res.send(status));


    /**
     * Retrieves all following users by user.
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the User following another user.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the follow objects.
     */
    findAllFollowingUsers = (req: Request, res: Response) =>
        FollowController.followDao.findAllFollowingUsers(req.params.uid)
            .then(follow => res.json(follow));

    /**
     * Retrieves all follower users for user.
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the User follower.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the follow objects.
     */
    findAllFollowers = (req: Request, res: Response) =>
        FollowController.followDao.findAllFollowers(req.params.uid)
            .then(follow => res.json(follow));

};