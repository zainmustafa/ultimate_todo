import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/todo";
import { Client } from "pg";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.postgerSqlSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private postgerSqlSetup(): void {
        let client = new Client("postgres://xkhfwplo:INLKXjdTiHygaBzXi20AKd43VC-_EZe9@horton.elephantsql.com:5432/xkhfwplo");
        client.connect(function(err) {
            if (err) {
                return console.error("could not connect to postgres", err);
            }
            client.query("SELECT NOW()",function(err, result) {
                    if (err) {
                        return console.error("error running query", err);
                    }
                    client.end();
                }
            );
        });
    }

}

export default new App().app;
