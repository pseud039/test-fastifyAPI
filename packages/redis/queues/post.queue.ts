import { Queue } from "bullmq"
import { client } from "../client"

export const postQueue = new Queue("post-processing", {
  connection: client
})