"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../models/user.entity");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost", //process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    username: "postgres", //process.env.DB_USER,
    password: "Admin@123", //process.env.DB_PASSWORD,
    database: "postgres", //process.env.DB_NAME,
    entities: [user_entity_1.User],
    synchronize: true
});
