const { Contact } = require("../../models/contact");
const { NotFound } = require("http-errors");

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
        throw await NotFound(`Contact with id : ${contactId} not found`);
    } res.json({
        status: "success",
        code: 200,
        message: `Contact with id : ${contactId} successfull deleted`,
        data: {
            result
        }
    })
}

    module.exports = removeContact;
    