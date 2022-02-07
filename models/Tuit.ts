import User from "./User";

export default class Tuit {
    private tuit: String = '';
    private postedBy: User | null = null;
    private postedOn: Date = new Date();
}