import { userRepository } from "../repositories/user.repository";
import { User } from "../models/user.entity";
import bcrypt from 'bcrypt';

export class UserService {
    async getAll() {
        return userRepository.find();
    }

    async getById(id: number) {
        return userRepository.findOneBy({ id });
    }

    async create(data: Partial<User>) {
        data.password = await bcrypt.hash(data.password!, 10);
        const user = userRepository.create(data);
        return userRepository.save(user);
    }

    async update(id: number, data: Partial<User>) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        await userRepository.update(id, data);
        return this.getById(id);
    }

    async delete(id: number) {
        return userRepository.delete(id);
    }

    async findByEmail(email: string) {
        return userRepository.findOneBy({ email });
    }
}
