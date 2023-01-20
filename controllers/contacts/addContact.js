const { Contact } = require("../../models/contact")

const addContact = async (req, res) => {
    const result = await Contact.create(req.body);
    if (!result) {
      return res.status(400).json({ message: "missing required name field" });
    }
  return res.json({
    status: "success",
    code: 201,
    message: `New contact successfull add`,
    data: {
      result,
    },
  });
}

module.exports = addContact