import Follow from "../../models/follow/Follow";

export default interface FollowDao {
    findAllFollowingUsers(uid: string): Promise<Follow[]>;
    findAllFollowers(uid: string): Promise<Follow[]>;
    userFollowsAnotherUser(sourceuid: string, targetuid: string): Promise<any>;
    userUnfollowsAnotherUser(sourceuid: string, targetuid: string): Promise<any>;
}