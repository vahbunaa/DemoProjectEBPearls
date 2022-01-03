const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = new express.Router();
const {
  requestValidator,
  loginValidator,
  jwtAuthenticationValidator,
} = require("../validation/validator");

const userController = require("../controller/user");
const otherController = require("../controller/someKindOfController");

router.post("/users", requestValidator, userController.createUser);
router.post("/users/login", loginValidator, userController.createToken);

router.get("/users", jwtAuthenticationValidator, userController.getAllUsers);

router.get("/users/:id", userController.getUserFromId);
router.get("/", otherController.filterUsers);

router.patch("/users/:id", userController.updateUser);
router.patch("/update/:id", otherController.updateReceivedAfterFilter);
// router.patch("/update/:id", otherController.updateSentToAfterFilter);

router.delete("/users/:id", userController.deleteUser);

module.exports = router;
