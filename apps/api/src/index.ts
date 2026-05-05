import { prisma } from "@repo/db";
import Fastify from "fastify";

const app = Fastify();

app.get("/", async () => {
  return { msg: "API running" };
});

app
  .listen({ port: 3000 })
  .then(() => {
    console.log("API is running on http://localhost:3000");
  })
  .catch((err) => {
    console.error("Error starting API:", err);
    process.exit(1);
  });
