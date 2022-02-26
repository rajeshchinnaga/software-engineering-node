/**
 * @file Defines mongoose schema for documents in the tuits collection
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: String, ref:'UserModel'},
    postedOn: {type: Date, default: Date.now}
}, {collection: "tuits"});
export default TuitSchema;