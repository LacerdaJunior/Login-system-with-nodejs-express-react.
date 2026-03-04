import bcrypt from "bcrypt";
import { DatabasePostg } from "../repositories/database-postg.js";

const database = new DatabasePostg();

export class UserService {
  async registerUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);

    await database.create({
      name,
      email,
      password: hashedPassword,
    });
  }
}
