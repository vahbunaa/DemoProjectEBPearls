const Schema = require("./schemas/userSchema");
const passport = require("passport");

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
exports.loginValidator = async (req, res, next) => {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return res.status(403).send({
        status: "error",
        message: err.message,
      });
    }

    if (!user) {
      return res.status(403).send({
        status: info.title,
        message: info.message,
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

exports.jwtAuthenticationValidator = async (req, res, next) => {
  passport.authenticate("jwt", function (err, user) {
    if (err) {
      return res.status(403).send({
        status: "error",
        message: err.message,
      });
    }

    if (!user) {
      return res.status(403).send({
        status: "failed",
        message: "jwt invalid",
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};
