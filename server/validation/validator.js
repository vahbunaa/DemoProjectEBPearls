const Schema = require("./schemas/userSchema");

exports.requestValidator = async (req, res, next) => {
  try {
    const { value, error } = await Schema.validate(req.body);

    if (error) throw new Error(error);
    req.body = value;
    return next();
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error.message });
  }
};
