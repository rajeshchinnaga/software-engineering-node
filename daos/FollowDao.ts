/**
 * @file Implements DAO managing data storage of Follow. Uses mongoose Follow model
 * to integrate with MongoDB
 */
import FollowDaoI from "../interfaces/follow/FollowDao";
import FollowModel from "../mongoose/follow/FollowModel";
import Follow from "../models/follow/Follow";

/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Follow.
 * @property {Follow} followDao  single instance of FollowDao
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }

    private constructor() {
    }


    /**
     * Uses FollowDao to retrieve all following users documents from follow collection
     * @param {string} uid Primary key of user to get details.
     * @returns Promise To be notified when the users are retrieved from
     * database
     */
    findAllFollowingUsers = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollower: uid})
            .populate("userFollowing")
            .exec();

    /**
     * Uses FollowDao to retrieve all followers documents from follow collection
     * @param {string} uid Primary key of user to get details.
     * @returns Promise To be notified when the users are retrieved from
     * database
     */
    findAllFollowers = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowing: uid})
            .populate("userFollower")
            .exec();


    /**
     * Inserts Following user instance into the database
     * @param {string} sourceuid Instance to be inserted into the databse
     * @param {string} targetuid Instance to be inserted into the databse
     * @returns Promise To be notified when following user is inserted into the database
     */
    userFollowsAnotherUser = async (sourceuid: string, targetid: string): Promise<any> =>
        FollowModel.create({userFollower: sourceuid, userFollowing: targetid});

    /**
     * Removes user from the following users database.
     * @param {string} sourceuid Primary key of source user.
     * @param {string} targetid Primary key of target user.
     * @returns Promise To be notified when following user is removed from the database
     */
    userUnfollowsAnotherUser = async (sourceuid: string, targetid: string): Promise<any> =>
        FollowModel.deleteOne({userFollower: sourceuid, userFollowing: targetid});
}