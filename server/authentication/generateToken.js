const jwt = require("jsonwebtoken");

exports.sendToken = async (payload) => {
  return await jwt.sign(payload, "super secret key");
};
