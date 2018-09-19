import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/todo";
import * as mongoose from "mongoose";
import  * as cors from "cors";
class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://osamakhan:teamgamma3@ds257372.mlab.com:57372/ultimate-todo-list';
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl,{ useNewUrlParser: true });
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

export default new App().app;