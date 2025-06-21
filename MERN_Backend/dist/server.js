"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
const app_1 = __importDefault(require("./app"));
database_1.AppDataSource.initialize().then(() => {
    const port = process.env.PORT || 3000;
    app_1.default.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(err => console.error("DB init error", err));
