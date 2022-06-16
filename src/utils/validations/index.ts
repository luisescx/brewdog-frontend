import Joi from "joi";

type UserInputType = {
  username: string;
  password: string;
};

const fieldsValidations = {
  username: Joi.string().min(5).required().messages({
    "string.empty": "Username is not allowed to be empty",
    "string.min": "Min 5 characters"
  }),
  password: Joi.string().min(5).required().messages({
    "string.empty": "Password is not allowed to be empty",
    "string.min": "Min 5 characters"
  }),
  confirm_password: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "string.empty": "Confirm password is not allowed to be empty",
      "any.only": "Confirm password does not match with password"
    })
};

export type FieldErrors = {
  [key: string]: string;
};

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {};

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join(".")] = err.message;
    });
  }

  return errors;
}

export function signUpValidate(values: UserInputType) {
  const schema = Joi.object(fieldsValidations);

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}

export function signInValidate(values: UserInputType) {
  const { username, password } = fieldsValidations;
  const schema = Joi.object({ password, username });

  return getFieldErrors(schema.validate(values, { abortEarly: false }));
}
