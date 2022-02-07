import { Formik, Form, Field, ErrorMessage } from "formik";
import { validate } from "../scripts/formValidation";
import { FormValues } from "../models/FormValues";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import SubmittedMessage from "./SubmittedMessage";

const initialValues = { name: "", email: "", message: "" };

const onSubmit = (values: FormValues) => {
  emailjs
    .send(
      "service_i00ixue",
      "template_kulddke",
      //@ts-ignore
      values,
      "user_SrGPoG7y6LiTVnPtvy41y"
    )
    .then(
      () => {
        alert("Message sent");
      },
      (error) => {
        console.log(error.text);
        alert("Unable to send message");
      }
    );
  console.log("Form data ", values);
};
export default function ContactForm() {
  const [submited, setSubmited] = useState(false);
  return <> {submited ? (
    <SubmittedMessage/>
  ) : (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values) => {
        onSubmit(values);
        setSubmited(true);
      }}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <Field type="text" id="name" name="name" />
          <p className="error-text">
            <ErrorMessage name="name" />
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <p className="error-text">
            <ErrorMessage name="email" />
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="message">Message</label>
          <Field as="textarea" type="text" id="message" name="message" />
          <p className="error-text">
            <ErrorMessage name="message" />
          </p>
        </div>
        <div className="form-action">
          <button type="submit" className="button-main">
            Send
          </button>
        </div>
      </Form>
    </Formik>
  )}</>;
}
