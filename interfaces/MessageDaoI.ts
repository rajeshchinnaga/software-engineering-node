import Message from "../models/Message";

export default interface MessageDaoI{
    userSendsMessage(message : Message, uid1:string, uid2: string) : Promise<any>;
    userDeletesMessage(mid:string) : Promise<any>;
    findAllMessagesSentByUser(uid:string) : Promise<Message[]>;
    findAllMessagesReceivedByUser(uid:string) : Promise<Message[]>;
    findAllMessages() : Promise<Message[]>;
};
