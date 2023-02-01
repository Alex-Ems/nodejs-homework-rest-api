const express = require("express");

const {
  contactsJoiSchema,
  updateContactJoiSchema,
  favoriteJoiSchema,
} = require("../../models/contact");

const { auth, validation, ctrlWrapper } = require("../../middlewares/index");

const { contacts: ctrl } = require("../../controllers/index");

const { json } = require("express");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", auth, validation(contactsJoiSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(updateContactJoiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
