const Joi = require("joi");

const contactsSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Please, you should provide name!",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Please, you should provide email!",
  }),
  phone: Joi.string().min(11).max(15).required().messages({
    "any.required": "Please, you should provide phone!",
  }),
  favorite: Joi.boolean(),
});

const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().min(11).max(15),
  favorite: Joi.boolean(),
});

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  contactsSchema,
  updateContactSchema,
  favoriteSchema,
};
