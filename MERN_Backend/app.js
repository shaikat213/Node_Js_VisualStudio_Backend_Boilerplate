"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./docs/swagger");
require("/config/passport");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || 'sessionsecret',
    resave: false,
    saveUninitialized: true
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.use('/users', user_routes_1.default);
exports.default = app;
//import * as express from 'express';
//import { AddressInfo } from "net";
//import * as path from 'path';
//import routes from './routes/index';
//import users from './routes/user';
//const debug = require('debug')('my express app');
//const app = express();
//// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', routes);
//app.use('/users', users);
//// catch 404 and forward to error handler
//app.use((req, res, next) => {
//    const err = new Error('Not Found');
//    err[ 'status' ] = 404;
//    next(err);
//});
//// error handlers
//// development error handler
//// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
//        res.status(err[ 'status' ] || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}
//// production error handler
//// no stacktraces leaked to user
//app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
//    res.status(err.status || 500);
//    res.render('error', {
//        message: err.message,
//        error: {}
//    });
//});
//app.set('port', process.env.PORT || 3000);
//const server = app.listen(app.get('port'), function () {
//    debug(`Express server listening on port ${(server.address() as AddressInfo).port}`);
//});
