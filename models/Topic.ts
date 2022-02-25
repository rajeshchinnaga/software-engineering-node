/**
 * @file Declares Tuit with Topic data type representing relationship between
 * users and Tuits, as in user posts a tuit with topic.
 */
import Tuit from "./tuits/Tuit";
import Tuit2Topic from "./Tuit2Topic";

/**
 * @typedef Topic Represents tags relationship between tuit and topic,
 * as in a user posts a tuit with a topic.
 * @property {string} topic User posting the tuit with topic.
 */
export default class Topic {
    private topic: String = '';
}