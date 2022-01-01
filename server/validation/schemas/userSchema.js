const Joi = require("joi");

const Schema = Joi.object({
  name: Joi.object({
    firstName: Joi.string().required().trim().lowercase(),
    lastName: Joi.string().required().trim().lowercase(),
  }).length(2),
  age: Joi.number().min(17).max(100).required(),
  email: Joi.string().email().required().lowercase().trim(),
  password: Joi.string().required().min(6).max(20).trim(),
  bio: Joi.string().trim().lowercase(),
  gender: Joi.string().required().trim().lowercase(),
  occupation: Joi.string().required().trim().lowercase(),
  hobbies: Joi.array().items(
    Joi.object({ hobbieTitle: Joi.string().lowercase().required() })
  ),
  interestedIn: Joi.string(),
  location: Joi.object({
    coordinates: Joi.array()
      .items(Joi.number().required().min(-180).max(180))
      .length(2),
  }),
  requestsSentTo: Joi.array().items(Joi.number()),
  requestsReceived: Joi.array().items(
    Joi.object({
      userID: Joi.number(),
      status: Joi.string().required().trim().lowercase(),
    })
  ),
  usersMatched: Joi.array().items(Joi.number()),
});

// const Schema = Joi.object({
//   age: Joi.number().min(17).max(100).required(),
// });

module.exports = Schema;
