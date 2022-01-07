const express = require("express");
const passport = require("passport");
require("./mongoose");
const cors = require("cors");

const userRouter = require("./routes/user");

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["refreshToken", "accessToken"],
  })
);
app.use(express.json());
app.use(userRouter);
require("./authentication/passport");
app.use(passport.initialize());

app.listen(port, () => {
  console.log("Server is running");
});
