import { ColumnType, Metadata } from "@hiveops/core";
import { BaseRepository } from "@hiveops/node";
import { Image } from "./image";
import { Person } from "./person";
import { UserRole } from "./user-role";
export type UserData = Person & {
  email: string;
  isActive: boolean;
  lastLogin: string;
  profileImage: Image;
  role: UserRole;
};
export type User = Metadata & UserData;
export class UserRepository extends BaseRepository<UserData, User> {
  constructor() {
  super("User", {
  age: ColumnType.INTEGER,
  email: ColumnType.TEXT,
  firstName: ColumnType.TEXT,
  isActive: ColumnType.BOOLEAN,
  lastLogin: ColumnType.TEXT,
  lastName: ColumnType.TEXT,
  profileImage: ColumnType.TEXT,
  role: ColumnType.TEXT,
  });
  }
}
export const userRepository = new UserRepository();