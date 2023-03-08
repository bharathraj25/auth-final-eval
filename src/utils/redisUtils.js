const { createClient } = require('redis');

const config = {
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
};

const redisClient = createClient(process.env.REDIS_HOST ?? config);
redisClient.on('error', (err) => {
  console.error(err);
});

const getRedisClient = async () => {
  if (!redisClient.isReady) {
    console.log('connecting to redis');
    await redisClient.connect();
    console.log('connected to redis');
  }
  return redisClient;
};

const disconnectRedis = async () => {
  if (redisClient.isReady)
    await redisClient.disconnect();
};

// good way to do so as in a file should only handle this right ?
// on some terminate or quit signal auto disconnect from redis, below are some of the event signals recieved
// const exitingEvents = ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGHUP', 'exit'];
// for (const exitingEvent of exitingEvents) {
//   process.on(exitingEvent, async () => {
//     console.log('disconnecting to redis');
//     await disconnectRedis();
//   });
// }

module.exports = {
  getRedisClient,
  disconnectRedis,
};
