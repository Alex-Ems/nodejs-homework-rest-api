const { validation } = require("./validation");
const { ctrlWrapper } = require("./ctrlWrapper");
const { auth } = require("./auth");
const upload = require("./upload");

module.exports = {
  upload,
  validation,
  ctrlWrapper,
  auth,
};
