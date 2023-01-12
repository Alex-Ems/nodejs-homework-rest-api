const {
  contactsSchema,
  updateContactSchema,
} = require("../contactSchema/schema.js");

const validation = (contactsSchema) => {
  return (req, res, next) => {
    const { error } = contactsSchema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    }
    next();
  };
};

const updateValidation = (updateContactSchema) => {
  return (req, res, next) => {
    const { error } = updateContactSchema.validate(req.body);
    if (error) {
      error.status = 400;
      next(error);
      return;
    }
    next();
  };
};

module.exports = {
  validation,
  updateValidation,
};
