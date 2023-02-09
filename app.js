const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
  to: "xadis37473@crtsec.com",
  from: "fsdeveloper@meta.ua",
  subject: "New message",
  html: "<p>Everything works fine, you are just space</p>",
};

sgMail
  .send(email)
  .then(() => {
    console.log("Email success");
  })
  .catch((error) => {
    console.log(error.message);
  });

const authRouter = require("./routes/api/auth");
const usersRouter = require("./routes/api/users");
const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
