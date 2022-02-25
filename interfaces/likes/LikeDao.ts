import Like from "../../models/likes/Like";

export default interface LikeDao {
    findAllUsersThatLikedTuit(tid: string): Promise<Like[]>;
    findAllTuitsLikedByUser(uid: string): Promise<Like[]>;
    userLikesTuit(tid: string, uid: string): Promise<any>;
    userUnlikesTuit(tid: string, uid: string): Promise<any>;
}