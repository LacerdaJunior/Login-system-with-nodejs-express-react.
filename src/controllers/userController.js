import { UserService } from "../services/userService.js";

const userService = new UserService();

export class UserController {
  async register(req, res) {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Name, email and password must be filled!");
    }

    try {
      await userService.registerUser(name, email, password);
      return res.status(201).send("User created successfully!");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error creating user.");
    }
  }
}
