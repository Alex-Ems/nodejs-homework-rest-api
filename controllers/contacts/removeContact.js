const { Contact } = require("../../models/contact");
const { NotFound } = require("http-errors");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound(`Contact with id : ${contactId} not found`);
  }
  res.status(200).json({
    message: `Contact with id : ${contactId} successfull deleted`,
    result,
  });
};

module.exports = removeContact;
