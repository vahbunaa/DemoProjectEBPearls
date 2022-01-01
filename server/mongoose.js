const mongoose = require("mongoose");

const CONNECTION_URL =
  "mongodb+srv://anubhav:Anubhav1111@clustertest.3qkad.mongodb.net/datingAppDatabaseSecondOne?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(CONNECTION_URL, () => {
    console.log("yoyo");
  });
}

main();
