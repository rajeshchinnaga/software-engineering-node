/**
 * @file Declares Tuit with Tag data type representing relationship between
 * users and Tuits, as in user posts a tuit with tag.
 */
import Tuit from "./tuits/Tuit";
import Tuit2Tag from "./Tuit2Tag";

/**
 * @typedef Tag Represents tags relationship between tuit and tag,
 * as in a user posts a tuit with a tag.
 * @property {string} tag User posting the tuit with tag.
 */
export default class Tag {
    private tag: String = '';
}