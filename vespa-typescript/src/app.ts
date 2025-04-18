import { faker } from "@faker-js/faker";
import { configDotenv } from "dotenv";
import { postRepository, userRepository, vespaInit } from "./vespa";

configDotenv();

const start = async () => {
  vespaInit();

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });

  const user = await userRepository.saveOne({
    firstName,
    lastName,
    email,
    age: faker.number.int({ min: 21, max: 45 }),
  });
  console.log(user);

  if (!user) {
    console.error("User not found");
    return;
  }

  const post = await postRepository.saveOne({
    userId: user._vespa_id,
    title: faker.lorem.words(3),
    body: faker.lorem.paragraph(),
  });
  console.log(post);

  const posts = await postRepository.findMany({});
  console.log(posts);
};

start().catch(console.error);
