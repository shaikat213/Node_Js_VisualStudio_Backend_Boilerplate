"use strict";
//import express from 'express';
//import bodyParser from 'body-parser';
//import dotenv from 'dotenv';
//import session from 'express-session';
//import passport from 'passport';
//import swaggerUi from 'swagger-ui-express';
//import { swaggerSpec } from './docs/swagger';
//import '/config/passport';
//import userRoutes from './routes/user.routes';
//dotenv.config();
//const app = express();
//app.use(bodyParser.json());
//app.use(session({
//    secret: process.env.SESSION_SECRET || 'sessionsecret',
//    resave: false,
//    saveUninitialized: true
//}));
//app.use(passport.initialize());
//app.use(passport.session());
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//app.use('/users', userRoutes);
//export default app;
////import * as express from 'express';
////import { AddressInfo } from "net";
////import * as path from 'path';
////import routes from './routes/index';
////import users from './routes/user';
////const debug = require('debug')('my express app');
////const app = express();
////// view engine setup
////app.set('views', path.join(__dirname, 'views'));
////app.set('view engine', 'pug');
////app.use(express.static(path.join(__dirname, 'public')));
////app.use('/', routes);
////app.use('/users', users);
////// catch 404 and forward to error handler
////app.use((req, res, next) => {
////    const err = new Error('Not Found');
////    err[ 'status' ] = 404;
////    next(err);
////});
////// error handlers
////// development error handler
////// will print stacktrace
////if (app.get('env') === 'development') {
////    app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
////        res.status(err[ 'status' ] || 500);
////        res.render('error', {
////            message: err.message,
////            error: err
////        });
////    });
////}
////// production error handler
////// no stacktraces leaked to user
////app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
////    res.status(err.status || 500);
////    res.render('error', {
////        message: err.message,
////        error: {}
////    });
////});
////app.set('port', process.env.PORT || 3000);
////const server = app.listen(app.get('port'), function () {
////    debug(`Express server listening on port ${(server.address() as AddressInfo).port}`);
////});
