import Express from 'express';
import {WebController} from "./controllers/WebController";
import {ErrorController} from "./controllers/ErrorController";

let server = new Express();
const port = 3000;

server.use(Express.static('dist/assets'));

server.set("views", "dist/assets/views");
server.set("view engine", "ejs");

server.get("*", ::(new WebController()).webAction);
server.use(::(new ErrorController()).errorAction);

server.listen(port);

console.log(`Server is listening to port: ${port}`);