import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDao";
import mongoose from "mongoose";

export default class TuitDao implements TuitDaoI{

    static tuitDao: TuitDao = new TuitDao();
    static getInstance(): TuitDao {return this.tuitDao;}


    async createTuit(username: string, tuit: Tuit): Promise<Tuit> {
        return await TuitModel.create({...tuit, postedBy: username});
    }

    async deleteTuit(tid: string): Promise<any> {
        return await TuitModel.deleteOne({_id: tid});
    }

    async findTuitsByUser(username: string): Promise<Tuit[]> {
        return await TuitModel.find({postedBy: username});
    }

    async findAllTuits(): Promise<Tuit[]> {
        return await TuitModel.find();
    }

    async findTuitById(tid: string): Promise<any> {
        return await TuitModel.findById(tid);
    }

    async updateTuit(tid: string, tuit: Tuit): Promise<any> {
        return await TuitModel.updateOne({_id: tid}, {$set: tuit});
    }

}