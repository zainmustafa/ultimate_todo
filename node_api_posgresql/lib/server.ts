import app from "./app";
import * as http from "http";

const PORT = process.env.PORT || 3000;

let server = http.createServer(app);
server.listen(PORT);