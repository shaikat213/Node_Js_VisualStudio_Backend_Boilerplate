import { AppDataSource } from "../config/database";
import { User } from "../models/user.entity";

export const userRepository = AppDataSource.getRepository(User);
