import express, { urlencoded, json, } from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import displayRoutes from "express-routemap";
//import connection from './config/database.js';
import {IP_SERVER, DB_USER, DB_PASSWORD, DB_HOST, PORT,API_VERSION } from './config/constants.js';
import authRoutes from './routers/auth.route.js'


const PORT_APP = PORT || 5000

const app = express()

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static("src/uploads"))
app.use(hpp());
app.use(helmet());
app.use(cors());


app.use(`/api/${API_VERSION}`,authRoutes)

//connection()
mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`)
    .then((conn) => {
        console.log(`DB Connection successfully`);
    })
    .catch((err) => {
        console.log("🚀 ~ file: app.js:31 ~ connection ~ err:", err);
    });


app.listen(PORT_APP, () => {
    displayRoutes(app)
    console.log(
        `api is running in enviroment  http://${IP_SERVER}:${PORT_APP}/api/${API_VERSION}`
    );
});