/**
 * @file Declares User data type representing relationship between
 * users and Tuits, as in user posts a tuit.
 */
import User from "../users/User";


/**
 * @typedef Tuit Represents tuits relationship between a user and tuit,
 * as in a user posts a tuit.
 * @property {User} postedBy user posting the tuit
 * @property {string} tuit User posting the tuit
 * @property {Date} postedOn the date and time the tuit posted.
 */
export default class Tuit {
    private tuit: String = '';
    private postedBy: User | null = null;
    private postedOn: Date = new Date();
}