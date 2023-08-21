import express,{ urlencoded, json, } from 'express';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import morgan from 'morgan'
import {API_VERSION,API_PREFIX } from './config/constants.js';
import authRoutes from './routers/auth.route.js'

function expressApp(app) {

    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(express.static("src/uploads"))
    app.use(hpp());
    app.use(helmet());
    app.use(cors());
    app.use(morgan('dev'));

    app.use(`/${API_PREFIX}/${API_VERSION}`, authRoutes)
}

export default expressApp;