import { Worker } from "bullmq";
import IORedis from "ioredis";
import { prisma } from "@repo/db";

const connection = new IORedis();

const worker = new Worker(
  "post-processing",
  async (job) => {
    const { postId } = job.data;

    console.log("Processing post:", postId);

    await new Promise((res) => setTimeout(res, 3000));

    await prisma.post.update({
      where: { id: postId },
      data: {
        processed: true,
        summary: "AI generated summary",
      },
    });
  },
  { connection },
);

worker.on("completed", (job) => {
  console.log("Job done:", job.id);
});
