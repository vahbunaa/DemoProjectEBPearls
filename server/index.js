const express = require("express");
const passport = require("passport");
require("./mongoose");

const userRouter = require("./routes/user");

const app = express();
const port = 3000;

app.use(express.json());
app.use(userRouter);

require("./authentication/passport");
app.use(passport.initialize());

app.listen(port, () => {
  console.log("Server is running");
});
