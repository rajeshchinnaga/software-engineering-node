/**
 * @file Declares Tuit with Topic data type representing relationship between
 * users and Tuits, as in user posts a tuit with topic.
 */
import Tuit from "./tuits/Tuit";

/**
 * @typedef Tuit2Topic Represents tags relationship between tuit and topic,
 * as in a user posts a tuit with a topic.
 * @property {Tuit} tuit with topic.
 * @property {string} topic User posting the tuit with topic.
 */
export default class Tuit2Topic {
    private tuit: Tuit | null = null;
    private topic: String ='';
}