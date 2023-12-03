import { phoneRegExp } from "../../untils/regExpPhone";
import * as yup from "yup";

export const schemaLogin = yup.object({
  phone: yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid"),
});

export const schemaRegister = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});
