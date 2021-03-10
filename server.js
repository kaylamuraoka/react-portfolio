const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/sendmessage", require("./routes/sendMailToMe"));

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});

app.use(morgan("dev"));
app.use(express.json());
