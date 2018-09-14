"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.mongoUrl = 'mongodb://saad1:saim1234@ds155862.mlab.com:55862/bootcamp-api';
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}
exports.App = App;
exports.default = new App().app;
//# sourceMappingURL=app.js.map