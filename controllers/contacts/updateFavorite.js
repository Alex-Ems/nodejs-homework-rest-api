const { Contact } = require("../../models/contact");
const { NotFound } = require("http-errors");

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw await NotFound(`Contact with id : ${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: `Contact with id : ${contactId} updated favorite`,
    data: {
      result,
    },
  });
};

module.exports = updateFavorite;
