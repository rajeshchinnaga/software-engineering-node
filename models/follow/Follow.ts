/**
 * @file Declares follow data type representing relationship between
 * users and users, as in user follows another user.
 */
import User from "../users/User";


/**
 * @typedef Follow Represents follow relationship between a user and a user,
 * as in a user follows a user
 * @property {User} userFollower user followed by another user
 * @property {User} userFollowing User following the another  user
 */
export default interface Follow {
    userFollower: User,
    userFollowing: User
}