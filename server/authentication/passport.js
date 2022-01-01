const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
// const connection = require("./database");
const User = require("../models/User");
const { validatePassword } = require("../authentication/generatePassword");

const customFields = {
  usernameField: "email",
  passwordField: "password",
};

const verifyCallback = async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User or pw not found");
    }
    const isValidUser = await validatePassword(password, user.password);
    console.log({ isValidUser });
    if (!isValidUser) {
      throw new Error("User or pw not found");
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
};
passport.use(new LocalStrategy(customFields, verifyCallback));

var JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "super secret key";

passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload._id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);
