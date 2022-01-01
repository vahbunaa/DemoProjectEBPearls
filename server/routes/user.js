const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = new express.Router();
const { requestValidator } = require("../validation/validator");

const userController = require("../controller/user");
const otherController = require("../controller/someKindOfController");

router.post("/users", requestValidator, userController.createUser);
router.post(
  "/users/login",
  function (req, res, next) {
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
  },
  userController.createToken
);

router.get(
  "/users",
  function (req, res, next) {
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
  },
  userController.getAllUsers
);

router.get("/users/:id", userController.getUserFromId);
router.get("/", otherController.filterUsers);

router.patch("/users/:id", userController.updateUser);
router.patch("/update/:id", otherController.updateReceivedAfterFilter);
// router.patch("/update/:id", otherController.updateSentToAfterFilter);

router.delete("/users/:id", userController.deleteUser);

module.exports = router;
