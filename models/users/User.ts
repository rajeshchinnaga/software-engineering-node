/**
 * @file Declares User data type representing relationship between
 * users, as in user is created.
 */
import AccountType from "../AccountType";
import MaritalStatus from "../MaritalStatus";
import Location from "../Location";

/**
 * @typedef User Represents users created.
 * @property {string} username user posting the tuit
 * @property {string} password User password.
 * @property {string} firstName first Name of the user.
 * @property {string} lastName last name of the user.
 * @property {string} email email of the user.
 * @property {string} profilePhoto profile photo of the user.
 * @property {string} headerImage header image of the user.
 * @property {string} accountType account type of the user.
 * @property {string} maritalStatus marital status of the user.
 * @property {string} biography biography of the user.
 * @property {Date} dateOfBirth date of birth of the user.
 * @property {Date} joined date joined of the user.
 * @property {string} location location of the user.
 */
export default class User {
    private username: String = '';
    private password: String = '';
    private firstName: String | null = null;
    private lastName: String | null = null;
    private email: String='';
    private profilePhoto: String | null = null;
    private headerImage: String | null = null;
    private accountType: AccountType = AccountType.Personal;
    private maritalStatus: MaritalStatus = MaritalStatus.Single;
    private biography: String | null = null;
    private dateOfBirth: Date | null = null;
    private joined: Date = new Date();
    private location: Location | null = null;
}
