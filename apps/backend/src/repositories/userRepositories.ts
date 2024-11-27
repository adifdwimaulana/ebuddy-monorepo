import { db } from "@configs/firebaseConfig";
import { User } from "types";

export class UserRepository {
  private userCollection = db.collection("users");

  async create(data: User) {
    const user = await this.userCollection.doc(data.id).set(data);
    return user;
  }

  async getUserByUid(uid: string) {
    const user = await this.userCollection.doc(uid).get();
    return user;
  }

  async updateUser(uid: string, data: any) {
    const user = await this.userCollection
      .doc(uid)
      .update({ name: data.name, gender: data.gender, address: data.address });
    return user;
  }
}
