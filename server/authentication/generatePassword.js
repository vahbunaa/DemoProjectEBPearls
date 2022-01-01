const bcrypt = require("bcryptjs");

exports.hashPassword = async (password) => await bcrypt.hash(password, 10);

exports.validatePassword = async (normalPassword, hashedPassword) => {
  return await bcrypt.compare(normalPassword, hashedPassword);
};
