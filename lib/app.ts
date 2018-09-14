import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import * as mongoose from "mongoose";


export class App {


    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://saad1:saim1234@ds155862.mlab.com:55862/bootcamp-api';  

    
    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);    
        this.mongoSetup();
 
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }


}

export default new App().app;
