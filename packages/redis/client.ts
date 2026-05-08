// import { createClient, RedisClientType } from 'redis';

// const client: RedisClientType = createClient();

// client.on('error', (err) => console.error('Redis Client Error', err));

// await client.connect();

// await client.set('key', 'value');
// const value = await client.get('key');
// console.log(value); // 'value'

// await client.disconnect();
import { createClient } from 'redis';

export const client = createClient({
  RESP: 3,
  clientSideCache: {
    ttl: 0,
    maxEntries: 0,
    evictPolicy: "LRU"
  }
});

await client.connect();
await client.set('key', 'value');
const value = await client.get("key");
client.destroy();