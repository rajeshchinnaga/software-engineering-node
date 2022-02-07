import express, {Request, Response} from 'express';
import mongoose from "mongoose";
import UserController from "./controllers/UserController";
import bodyParser from "body-parser";
import TuitController from "./controllers/TuitController";


const app = express();
mongoose.connect('mongodb+srv://rajeshchinnaga:Lokesh$2919@fse.xeh0y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(bodyParser.json());

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World Rajesh Chinnaga!'));

app.get('/add/:a/:b', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const userController = new UserController(app);
const tuitController = new TuitController(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);