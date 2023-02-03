const { Contact } = require("../../models/contact");
const { NotFound } = require("http-errors");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw new NotFound(`Contact with id : ${contactId} not found`);
  }
  res.status(200).json({
    result,
  });
};

module.exports = getContactById;
