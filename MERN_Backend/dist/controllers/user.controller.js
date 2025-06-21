"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const jwt_1 = require("../utils/jwt");
const bcrypt_1 = __importDefault(require("bcrypt"));
const service = new user_service_1.UserService();
class UserController {
    /**
     * @swagger
     * /users:
     *   get:
     *     summary: Get all users
     *     security: [BearerAuth: []]
     *     responses:
     *       200:
     *         description: List of users
     */
    async getAll(req, res) {
        res.json(await service.getAll());
    }
    async getById(req, res) {
        const user = await service.getById(+req.params.id);
        if (!user)
            return res.status(404).send("Not found");
        res.json(user);
    }
    async create(req, res) {
        const user = await service.create(req.body);
        const token = (0, jwt_1.generateToken)(user);
        res.json({ user, token });
    }
    async update(req, res) {
        const user = await service.update(+req.params.id, req.body);
        res.json(user);
    }
    async delete(req, res) {
        await service.delete(+req.params.id);
        res.sendStatus(204);
    }
    async login(req, res) {
        const { email, password } = req.body;
        const user = await service.findByEmail(email);
        if (!user || !(await bcrypt_1.default.compare(password, user.password))) {
            return res.status(401).send("Invalid credentials");
        }
        const token = (0, jwt_1.generateToken)(user);
        res.json({ token });
    }
}
exports.UserController = UserController;
