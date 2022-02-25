import User from "./User";

export default class Message{
    message : string | null =  null;
    sentBy : User | null = null;
    sentTo: User | null = null;
    sentOn : Date | null = null;
};