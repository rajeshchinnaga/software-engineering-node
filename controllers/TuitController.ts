/**
 * @file Controller RESTful Web service API for Tuits resource
 */
import {Request, Response, Express} from "express";
import TuitControllerI from "../interfaces/tuits/TuitController";
import TuitDao from "../daos/TuitDao";

/**
 * @class TuitController Implements RESTful Web service API for tuits resource.
 * Defines the following HTTP endpoints:
 * <ul>
 *     <li>GET /tuits to retrieve all the tuits posted.
 *     </li>
 *     <li>GET /tuits/:tid to retrieve a single tuit using tid.
 *     </li>
 *     <li>GET /users/:uid/tuits to retrieve all tuits tuited by user.
 *     </li>
 *     <li>POST /users/:uid to post a tuit</li>
 *     <li>DELETE /tuits/:tid to record that a user
 *     deletes tuit</li>
 *     <li>PUT /tuits/:tid to record that a user updates a tuit</li>
 * </ul>
 * @property {TuitDao} tuitDao Singleton DAO implementing tuits CRUD operations
 * @property {TuitController} TuitController Singleton controller implementing
 * RESTful Web service API
 */
export default class TuitController implements TuitControllerI {
    private static tuitDao: TuitDao = TuitDao.getInstance();
    app: Express;

    /**
     * Creates singleton controller instance
     * @param {Express} app Express instance to declare the RESTful Web service
     * API
     */
    constructor(app: Express) {
        this.app = app;
        this.app.get('/tuits', this.findAllTuits);
        this.app.get('/tuits/:tid', this.findTuitById);
        this.app.get('/users/:uid/tuits', this.findTuitsByUser);
        this.app.post('/users/:uid', this.createTuit);
        this.app.delete('/tuits/:tid', this.deleteTuit);
        this.app.put('/tuits/:tid', this.updateTuit);
    }


    /**
     * @param {Request} req Represents request from client, including the
     * path parameters uid and body representing the user posting a tuit.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the new tuit that was inserted in the
     * database.
     */
    createTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.createTuit(req.params.uid, req.body)
            .then(tuit => res.json(tuit));


    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tid representing the user deleting a tuit.
     * @param {Response} res Represents response to client, including status
     * on whether deleting the tuit was successful or not
     */
    deleteTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.deleteTuit(req.params.tid)
            .then(status => res.json(status));

    /**
     * @param {Request} req Represents request from client, including the
     * path parameters tid and body representing the user updating a tuit.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON containing the tuit has been updated and inserted in the
     * database.
     */
    updateTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.updateTuit(req.params.tid, req.body)
            .then(status => res.json(status));

    /**
     * Retrieves all tuits.
     * @param {Request} req Represents request from client, representing the tuits.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects.
     */
    findAllTuits = (req: Request, res: Response) =>
        TuitController.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits));

    /**
     * Retrieves a tuit from the database.
     * @param {Request} req Represents request from client, including the path
     * parameter tid representing the tuit.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit object.
     */
    findTuitById = (req: Request, res: Response) =>
        TuitController.tuitDao.findTuitById(req.params.tid)
            .then(tuit => res.json(tuit));

    /**
     * Retrieves all tuits by user from the database.
     * @param {Request} req Represents request from client, including the path
     * parameter uid representing the user.
     * @param {Response} res Represents response to client, including the
     * body formatted as JSON arrays containing the tuit objects.
     */
    findTuitsByUser = (req: Request, res: Response) =>
        TuitController.tuitDao.findTuitsByUser(req.params.uid)
            .then(tuit => res.json(tuit));
}