import { FormikErrors } from "formik";
import { FormValues } from "../models/FormValues";

export function validate(values: FormValues) {
  let errors: FormikErrors<FormValues> = {};
  if (!values.name) {
    errors.name = "Name is a required field";
  }
  if (!values.message) {
    errors.message = "Message field required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.email)) {
    errors.email = "invalid email address";
  }
  return errors;
}
