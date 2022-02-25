import FollowDaoI from "../interfaces/FollowDaoI";
import Follow from "../models/Follow";
import FollowModel from "../mongoose/FollowModel";

export default class FollowDao implements FollowDaoI{
    private static followDao : FollowDao | null = null;
    public static getInstance = () : FollowDao => {
        if (FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }

    private constructor() {}

    findAllFollowersOfUser = async (userId:string) : Promise<Follow[]> =>
        FollowModel.find({userFollowed:userId}).populate("userFollowing").exec();

    findAllFollowingOfUser = async (userId:string) : Promise<Follow[]> =>
    FollowModel.find({userFollowing:userId}).populate("userFollowed").exec();

    userFollowsAnotherUser = async (userId:string, uid:string) : Promise<any> =>
        FollowModel.create({userFollowed:userId, userFollowing:uid});

    userUnfollowsAnotherUser = async (userId:string, uid:string) : Promise<any> =>
        FollowModel.deleteOne({userFollowed:userId, userFollowing:uid});
};