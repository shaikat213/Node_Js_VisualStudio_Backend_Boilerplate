import { DataSource } from "typeorm";
import { User } from "../models/user.entity";
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",//process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: "postgres",//process.env.DB_USER,
    password: "Admin@123",//process.env.DB_PASSWORD,
    database: "postgres",//process.env.DB_NAME,
    entities: [User],
    synchronize: true
});
