// // {$project:{result:{$filter: {age: [18,30,25,44,56,33,32,66,33], as: "num", cond: {$and: [{$gt:20}, {$lt: 33}]}}}}}

// // mongosh "mongodb+srv://clustertest.3qkad.mongodb.net/datingAppDatabaseSecondOne" --username anubhav

// db.users.find({ $and: [{ age: { $gte: 20 } }, { age: { $lt: 33 } }] });

// db.users.find({ age: { $gte: 20, $lt: 25 } });

// db.users.find({ interestedIn: { $eq: "male" } });

// //!search (DONE)
// db.users.find({
//   $and: [
//     { age: { $gte: 20, $lte: 25 } },
//     { interestedIn: { $eq: "male" } },
//     { "hobbies.hobbieTitle": { $eq: "read" } },
//   ],
// });

// //!if match DONE

// db.users.updateOne(
//   { _id: "match id" },
//   { $addToSet: { requestsReceived: { _id: "jwt bata auxa" } } }
// );
// db.users.updateOne(
//   { _id: "jwt bata aune" },
//   { $addToSet: { requestsSentTo: { _id: "match id" } } }
// );

// //!goto requests received array have an option to accept request
// //!better if you usue aggregation
// db.users.updateOne(
//   { _id: "jwt bata aune" },
//   { $addToSet: { usersMatched: { _id: "match id" } } }
//   //!also pull the data from received if youre the one accepting
// );
// db.users.updateOne(
//   { _id: "match id" },
//   { $addToSet: { usersMatched: { _id: "jwt bata aune" } } }
//   //!also pul data from sentto if youre the one fetting accepted
// );
// db.users.aggregate([{$match: {_id: "jwt bata aune"}},{$addToSet: }])

//!after users matched ACCEPT AND REJECT
//! Status enum pending aceept and request
//! if status is accepted, data gets pulled from received and goes to matched

// db.users.aggregate([
//   {
//     $match: {
//       $or: [
//         { id: "61c1aa17fe09b202fdc451ea" },
//         { "requestsReceived.status": "accepted" },
//       ],
//     },
//   },
//   {
//     $addToSet: { usersMatched: "61c1a7b0fe09b202fdc451ce" },
//   },
// ]);
// db.users.updateOne(
//   {
//     $or: [
//       { id: "61c1aa17fe09b202fdc451ea" },
//       { "requestsReceived.status": "pending" },
//     ],
//   },
//   {
//     $addToSet: { usersMatched: "61c1a7b0fe09b202fdc451ce" },
//   }
// );

// db.users.updateOne(
//   { _id: ObjectId("61c1aa17fe09b202fdc451ea") },
//   {
//     $pull: {
//       requestsReceived: {
//         $elemMatch: { "requestsReceived.status": "pending" },
//       },
//     },
//   }
// );
// db.users.updateOne(
//   { id: "61c1aa17fe09b202fdc451ea" },
//   { $addToSet: { usersMatched: "61c1a7b0fe09b22fdc451ce" } }
// );
//!THIS WORKED
// db.users.updateOne(
//   { _id: ObjectId("61c1aa17fe09b202fdc451ea") },
//   {
//     $pull: {
//       requestsReceived: {
//         status: "pending",
//         _id: ObjectId("61c1a7b0fe09b202fdc451ce"),
//       },
//     },
//   }
// );
