/**
 * @file Implements DAO managing data storage of tuits. Uses mongoose UserModel
 * to integrate with MongoDB
 */
import Tuit from "../models/tuits/Tuit";
import TuitModel from "../mongoose/tuits/TuitModel";
import TuitDaoI from "../interfaces/tuits/TuitDao";

/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of Tuits
 * @property {Tuit} tuitDao  single instance of TuitDao
 */
export default class TuitDao implements TuitDaoI{

    static tuitDao: TuitDao = new TuitDao();
    static getInstance(): TuitDao {return this.tuitDao;}


    /**
     * Inserts Tuit instance into the database
     * @param {Tuit} tuit Instance to be inserted into the database
     * @param {string} uid Instance to be inserted into the databse
     * @returns Promise To be notified when tuit is inserted into the database
     */
    async createTuit(uid: string, tuit: Tuit): Promise<Tuit> {
        return await TuitModel.create({...tuit, postedBy: uid});
    }

    /**
     * Removes tuit from the database.
     * @param {string} tid Primary key of tuit to be removed
     * @returns Promise To be notified when tuit is removed from the database
     */
    async deleteTuit(tid: string): Promise<any> {
        return await TuitModel.deleteOne({_id: tid});
    }


    /**
     * Uses TuitModel to retrieve all tuit documents from tuits collection
     * @param {string} uid Primary key of user to get details.
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    async findTuitsByUser(uid: string): Promise<Tuit[]> {
        return await TuitModel.find({postedBy: uid});
    }


    /**
     * Uses TuitModel to retrieve all tuit documents from tuits collection
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    async findAllTuits(): Promise<Tuit[]> {
        return await TuitModel.find();
    }


    /**
     * Uses TuitModel to retrieve single tuit document from tuits collection
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when tuit is retrieved from the database
     */
    async findTuitById(tid: string): Promise<any> {
        return await TuitModel.findById(tid);
    }


    /**
     * Updates Tuit with new values in database
     * @param {string} tid Primary key of user to be modified
     * @param {Tuit} tuit object containing properties and their new values
     * @returns Promise To be notified when tuit is updated in the database
     */
    async updateTuit(tid: string, tuit: Tuit): Promise<any> {
        return await TuitModel.updateOne({_id: tid}, {$set: tuit});
    }
}