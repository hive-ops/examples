import { ColumnType, Metadata } from "@hiveops/core";
import { BaseRepository } from "@hiveops/node";

export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

export type User = UserData & Metadata;

const userColumnTypeMap = {
  firstName: ColumnType.TEXT,
  lastName: ColumnType.TEXT,
  email: ColumnType.TEXT,
  age: ColumnType.INTEGER,
};

export class UserRepository extends BaseRepository<UserData, User> {
  constructor() {
    super("User", userColumnTypeMap);
  }
}