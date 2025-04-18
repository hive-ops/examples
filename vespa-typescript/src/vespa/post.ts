import { ColumnType, Metadata } from "@hiveops/core";
import { BaseRepository } from "@hiveops/node";

export type PostData = {
  userId: string;
  title: string;
  body: string;
};

export type Post = PostData & Metadata;

const postColumnTypeMap = {
  userId: ColumnType.TEXT,
  title: ColumnType.TEXT,
  body: ColumnType.TEXT,
};

export class PostRepository extends BaseRepository<PostData, Post> {
  constructor() {
    super("Post", postColumnTypeMap);
  }
}