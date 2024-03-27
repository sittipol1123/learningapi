const Database = require("../../lib/database");
import { UserController } from "./user.controller";
import { UserModel } from "./user.model";
import { UserRepository } from "./user.repository";
import { v4 as uuidv4 } from "uuid";

const db = new Database("users", {
  defaultData: [
    {
      id: uuidv4(),
      username: "sittipol",
      password: "1234",
      email: "sittipol@gmail.com",
    },
  ],
});

const userRepository = new UserRepository(db);
export const userController = new UserController(userRepository);
