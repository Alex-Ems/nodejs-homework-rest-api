const express = require("express");
const { auth, validation, ctrlWrapper } = require("../../middlewares/index");
const { auth: ctrl } = require("../../controllers/index");
const { signUpAndLoginJoiSchema } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validation(signUpAndLoginJoiSchema),
  ctrlWrapper(ctrl.signup)
);

router.post(
  "/login",
  validation(signUpAndLoginJoiSchema),
  ctrlWrapper(ctrl.login)
);

router.post("/logout", auth, ctrlWrapper(ctrl.logout) )

module.exports = router;
