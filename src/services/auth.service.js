const jwt = require('jsonwebtoken');

const db = require('../../db/models');
const utilService = require('../utils');
const { NotFoundError, HttpError } = require('../errors');

const SECRET_KEY = process.env.SECRET_KEY ?? 'secret';
const { EXPIRATION_TIME_SECONDS } = require('../config');

module.exports = {
  async login(username, password) {
    const redisClient = await utilService.getRedisClient();
    const foundUser = await db
      .Users
      .findOne({
        where: {
          username,
          password: utilService.hashString(password)
        }
      });


    if (!foundUser)
      throw new NotFoundError('user not found');

    const token = jwt.sign(foundUser.dataValues, SECRET_KEY, {
      algorithm: 'HS256',
      expiresIn: EXPIRATION_TIME_SECONDS,
    });

    // treating any truthy value as token exists
    redisClient.set(token, '1', {
      'EX': EXPIRATION_TIME_SECONDS
    });
    return { token };
  },

  async validateToken(token) {
    const redisClient = await utilService.getRedisClient();
    const userId = await redisClient.get(token);
    if (!userId) {
      throw new HttpError(401, 'Unauthorized');
    }
    return jwt.verify(token, SECRET_KEY);
  }
};
