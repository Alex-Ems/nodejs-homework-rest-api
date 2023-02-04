const {Schema, model} = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Contact = model("contact", contactSchema);



const contactsJoiSchema = Joi.object({
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

const updateContactJoiSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  phone: Joi.string().min(11).max(15),
  favorite: Joi.boolean(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  Contact,
  contactsJoiSchema,
  updateContactJoiSchema,
  favoriteJoiSchema
};
