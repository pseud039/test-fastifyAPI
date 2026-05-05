import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis();

export const postQueue = new Queue("post-processing", {
  connection,
});
