import Database from "../../lib/database";
import { UserModel } from "./user.model";

export class UserRepository {
  constructor(protected db: Database<UserModel>) {}

  async getAll() {
    return this.db.readAll();
  }

  async storeUser(data: UserModel) {
    console.log(data);
    await this.db.insert(data);
    // return this.db.insert(data);
  }
}
