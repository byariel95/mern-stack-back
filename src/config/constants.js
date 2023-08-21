import { config } from "dotenv";


config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
  });

export const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME,API_VERSION,IP_SERVER,API_PREFIX,PORT,JWT_SECRET} = process.env



