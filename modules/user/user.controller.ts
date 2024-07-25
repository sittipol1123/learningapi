import { Request, Response } from "express";
import { UserRepository } from "./user.repository";

export class UserController {
  constructor(public userRepository: UserRepository) {}

  async getAll(req: Request, res: Response) {
    return res.json(await this.userRepository.getAll());
  }

  async store(req: Request, res: Response) {
    const tmp: {
      id: string;
      username: string;
      email: string;
      password: string;
    } = req.body;
    await this.userRepository.storeUser(tmp);
    // if () {
    //   console.log("success");
    // } else {
    //   console.log("error");
    // }
    // return res.json(await this.userRepository.storeUser(req.body));
  }
}
