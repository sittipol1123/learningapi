import { Request, Response } from "express";
import { UserRepository } from "./user.repository";
import { UserModel } from "./user.model";

export class UserController {
  constructor(public userRepository: UserRepository) {}

  async getAll(req: Request, res: Response) {
    return res.json(await this.userRepository.getAll());
  }

  async store(req: Request, res: Response) {
    const tmp: UserModel = req.body;
    await this.userRepository.storeUser(tmp);
    // if () {
    //   console.log("success");
    // } else {
    //   console.log("error");
    // }
    // return res.json(await this.userRepository.storeUser(req.body));
  }
}
