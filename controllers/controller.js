const { Contact } = require("../models/contact.js");

async function listContacts() {
  const contacts = await Contact.find();
  return contacts;
}

async function getContactById(contactId) {
  const contact = await Contact.findById(contactId);
  return contact;
}

async function addContact(contactBody) {
  const contact = await Contact.create(contactBody);
  return contact;
}

async function removeContact(contactId) {
  const contact = await Contact.findByIdAndDelete(contactId);
  return contact;
}

async function updateContact(contactId, contactBody, addNew) {
  const contact = await Contact.findByIdAndUpdate(
    contactId,
    contactBody,
    addNew
  );
  return contact;
}

async function updateStatusContact(contactId, contactBody, addNew) {
  const contact = await Contact.findByIdAndUpdate(
    contactId,
    contactBody,
    addNew
  );
  return contact;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
};
