const User = require("../models/User");
const { hashPassword } = require("../authentication/generatePassword");
const { sendToken } = require("../authentication/generateToken");

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    user.password = await hashPassword(user.password);
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

// exports.loginUser = async (req, res) => {
//   try {
//     const user = await User.findByCredentials(
//       req.body.email,
//       req.body.password
//     );
//     res.send(user);
//   } catch (e) {
//     res.status(400).send();
//   }
// };

exports.createToken = async (req, res, next) => {
  try {
    const id = req.user._id;
    console.log(id);
    const token = await sendToken(id.toString());

    if (!token) throw new Error();
    res.setHeader("authorization", token);
    return res
      .status(201)
      .send({ status: "success", data: { user: req.user, token } });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
};
exports.getUserFromId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
};
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate({ _id: req.params.id }, req.body);
    console.log(user);
    res.status(201).send(user);
  } catch (e) {
    console.log(e);
    res.send(e);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
};
