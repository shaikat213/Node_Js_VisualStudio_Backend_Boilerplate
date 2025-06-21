"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repositories/user.repository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    async getAll() {
        return user_repository_1.userRepository.find();
    }
    async getById(id) {
        return user_repository_1.userRepository.findOneBy({ id });
    }
    async create(data) {
        data.password = await bcrypt_1.default.hash(data.password, 10);
        const user = user_repository_1.userRepository.create(data);
        return user_repository_1.userRepository.save(user);
    }
    async update(id, data) {
        if (data.password) {
            data.password = await bcrypt_1.default.hash(data.password, 10);
        }
        await user_repository_1.userRepository.update(id, data);
        return this.getById(id);
    }
    async delete(id) {
        return user_repository_1.userRepository.delete(id);
    }
    async findByEmail(email) {
        return user_repository_1.userRepository.findOneBy({ email });
    }
}
exports.UserService = UserService;
