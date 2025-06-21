import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { generateToken } from "../utils/jwt";
import bcrypt from 'bcrypt';

const service = new UserService();

export class UserController {
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
    async getAll(req: Request, res: Response) {
        res.json(await service.getAll());
    }

    async getById(req: Request, res: Response) {
        const user = await service.getById(+req.params.id);
        if (!user) return res.status(404).send("Not found");
        res.json(user);
    }

    async create(req: Request, res: Response) {
        const user = await service.create(req.body);
        const token = generateToken(user);
        res.json({ user, token });
    }

    async update(req: Request, res: Response) {
        const user = await service.update(+req.params.id, req.body);
        res.json(user);
    }

    async delete(req: Request, res: Response) {
        await service.delete(+req.params.id);
        res.sendStatus(204);
    }

    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const user = await service.findByEmail(email);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send("Invalid credentials");
        }
        const token = generateToken(user);
        res.json({ token });
    }
}
