const express = require("express");
const path = require("path");
const userRouter = require("./routers/user");
const cors = require("cors");
require("./db/mongoose");

const port = process.env.PORT;
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.options('*', cors(corsOptions))

app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.listen(port, () => {
  console.log("server listening on port " + port);
});
