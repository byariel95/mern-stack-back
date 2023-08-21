import mongoose from "mongoose";
import { DB_USER, DB_PASSWORD, DB_HOST,DB_NAME } from './constants.js';

 async function connection (){
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
        console.log("Db Connected")
    } catch (error) {
        console.log('Ha Ocurrido un error');
        process.exit(1);  
    }
}

export default  connection