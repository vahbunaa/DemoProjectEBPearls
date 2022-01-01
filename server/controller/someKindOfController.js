const User = require("../models/User");

exports.filterUsers = async (req, res, next) => {
  const { age, interestedIn, hobbies } = req.query;
  const [lowerLimit, upperLimit] = JSON.parse(age);

  try {
    const filteredArray = await User.find({
      $and: [
        { age: { $gte: lowerLimit, $lte: upperLimit } },
        { interestedIn: { $eq: interestedIn } },
        { "hobbies.hobbieTitle": { $eq: hobbies } },
      ],
    });

    res.send(filteredArray);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.updateReceivedAfterFilter = async (req, res, next) => {
  const _id = req.params.id;
  //   console.log({ _id });
  try {
    const newFilteredArrayReceived = await User.updateOne(
      { _id: "61c1aa17fe09b202fdc451ea" },
      {
        $addToSet: {
          requestsReceived: [{ _id }],
        },
      }
    );
    const newFilteredArraySentTo = await User.updateOne(
      { _id },
      {
        $addToSet: {
          requestsSentTo: [{ _id: "61c1aa17fe09b202fdc451ea" }],
        },
      }
    );
    res.send({ newFilteredArrayReceived, newFilteredArraySentTo });
  } catch (e) {
    // console.log(e);
    res.status(400).send(e);
  }
};
// exports.updateSentToAfterFilter = async (req, res, next) => {
//   const _id = req.params.id;
//   //   console.log(_id);
//   try {
//     const newFilteredArraySentTo = await User.updateOne(
//       { _id },
//       {
//         $addToSet: {
//           requestsSentTo: [{ _id: "61c1a9d9fe09b202fdc451e6" }],
//         },
//       }
//     );
//     // console.log(newFilteredArraySentTo);
//     res.send(newFilteredArraySentTo);
//   } catch (e) {
//     // console.log(e);
//     res.status(400).send(e);
//   }
// };
