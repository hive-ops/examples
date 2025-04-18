import { initialize } from "@hiveops/core";
import { PostRepository } from "./post";
import { UserRepository } from "./user";


export const postRepository = new PostRepository();
export const userRepository = new UserRepository();

export const vespaInit = (options?: {
  stackHRN: string;
  accessToken: string;
}): void => {
  initialize(options);
};