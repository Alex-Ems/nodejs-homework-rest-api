const { Contact } = require("../../models/contact");
const { NotFound } = require("http-errors");

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });
    if (!result) {
        throw await NotFound(`Contact with id : ${contactId} not found`);
    } res.json({
        status: "success",
        code: 200,
        message: `Contact with id : ${contactId} successfull updated`,
        data: {
            result
        }
    })
}

module.exports = updateContact