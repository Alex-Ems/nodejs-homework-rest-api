const { User } = require("../../models");
const { sendEmail } = require("../../helpers");
const { BadRequest } = require("http-errors");

const repeatVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (user.verify) {
    throw BadRequest("Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Email verification",
    html: `<a target="_blank" href="http://localhost:3000/api//users/verify/${user.verificationToken}">Click here to verify your email</a>`,
  };
  await sendEmail(mail);

  res.status(200).json({
    message: "Verification email send",
    data: {
      email,
    },
  });
};

module.exports = repeatVerify;
