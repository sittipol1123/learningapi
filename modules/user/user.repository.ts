import Database from "../../lib/database";
import { UserModel } from "./user.model";

export class UserRepository {
  constructor(protected db: Database<UserModel>) {}

  async getAll() {
    return this.db.readAll();
  }
}
