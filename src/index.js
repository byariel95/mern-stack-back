import express from 'express';
import displayRoutes from "express-routemap";
import connection from './config/database.js';
import {IP_SERVER, PORT,API_VERSION } from './config/constants.js';
import expressApp from './app.js';

async function startServer() {

    const PORT_APP = PORT || 5000
    
    const app = express();

    await connection();

    expressApp(app);


    app.listen(PORT_APP, () => {
        displayRoutes(app)
        console.log(
            `api is running in enviroment  http://${IP_SERVER}:${PORT_APP}/api/${API_VERSION}`
        );
    });

}

startServer();