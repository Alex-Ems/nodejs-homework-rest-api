const { Contact } = require("../../models/contact");

const addContact = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  if (!result) {
    return res.status(400).json({ message: "missing required name field" });
  }
  return res.status(201).json({
    message: `New contact successfull add`,
    result,
  });
};

module.exports = addContact;
