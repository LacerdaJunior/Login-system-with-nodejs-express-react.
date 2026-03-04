import express from "express";
import { UserController } from "../controllers/userController.js";

const routes = express.Router();
const userController = new UserController();

routes.post("/register", userController.register);

export default routes;
