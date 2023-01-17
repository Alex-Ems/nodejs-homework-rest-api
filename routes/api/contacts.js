const express = require("express");
const { Contact } = require("../../models/contact.js");
const {
  contactsSchema,
  updateContactSchema,
  favoriteSchema,
} = require("../../contactSchema/schemaJoi.js");
const { validation } = require("../../validation/validation.js");
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers/controller");
const { json } = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json({ contacts });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ contact });
  } catch (error) {
    next(error);
  }
});

router.post("/", validation(contactsSchema), async (req, res, next) => {
  try {
    const contact = await addContact(req.body);
    if (!contact) {
      return res.status(400).json({ message: "missing required name field" });
    }
    return res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contact = await removeContact(contactId);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "contact successfull deleted" });
  } catch (error) {
    next(error);
  }
});

router.put(
  "/:contactId",
  validation(updateContactSchema),
  async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const contact = await updateContact(contactId, req.body, {
        new: true,
      });
      if (!contact) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(contact);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:contactId/favorite",
  validation(favoriteSchema),
  async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const contact = await updateStatusContact(contactId, req.body, {
        new: true,
      });
      if (!contact) {
        return res.status(404).json({ message: "Not found" });
      }
      res.status(200).json(contact);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
