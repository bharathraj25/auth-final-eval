const joiValidator = (joiSchema, validateProperty = 'body') => {
  return async function (req, res, next) {
    try {
      const value = await joiSchema.validateAsync(req[validateProperty]);

      // for more trustable validation
      req[validateProperty] = value;
      next();
    } catch (err) {
      next(err);
    }
  };
};

module.exports = {
  joiValidator,
};
