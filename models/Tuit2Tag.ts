/**
 * @file Declares Tuit with Tag data type representing relationship between
 * users and Tuits, as in user posts a tuit with tag.
 */
import Tuit from "./tuits/Tuit";

/**
 * @typedef Tuit2Tag Represents tags relationship between tuit and tag,
 * as in a user posts a tuit with a tag.
 * @property {Tuit} tuit with topic.
 * @property {string} tag User posting the tuit with tag.
 */
export default class Tuit2Tag {
    private tuit: Tuit | null = null;
    private tag: String = '';
}