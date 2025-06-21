import jwt from 'jsonwebtoken';
import { User } from "../models/user.entity";

const SECRET = process.env.JWT_SECRET || 'secret';

export function generateToken(user: User) {
    return jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1h' });
}
