const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    firstName: String,
    lastName: String,
  },
  age: Number,
  email: String,
  password: String,
  bio: String,
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  occupation: String,
  hobbies: [{ hobbieTitle: String }],
  interestedIn: {
    type: String,
    enum: ["male", "female", "both"],
  },
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  },
  requestsSentTo: [
    {
      userID: mongoose.Types.ObjectId,
    },
  ],
  requestsReceived: [
    {
      userID: mongoose.Types.ObjectId,
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
  usersMatched: [
    {
      userID: mongoose.Types.ObjectId,
    },
  ],
});

// userSchema.statics.findByCredentials = async (email, password) => {
//   const user = await User.findOne({ email });
//   if (!user) {
//     throw new Error("Unable to Login");
//   }

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     throw new Error("Unable to Login");
//   }

//   return user;
// };

// userSchema.pre("save", async function (next) {
//   const user = this;

//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }

//   next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
