const express = require("express");

const {
  contactsSchema,
  updateContactSchema,
  favoriteSchema,
} = require("../../contactSchema/schemaJoi.js");

const { validation, ctrlWrapper } = require("../../middlewares/index");

const { contacts: ctrl } = require("../../controllers/index");

const { json } = require("express");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(contactsSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(updateContactSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validation(favoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
