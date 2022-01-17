import React, { FormEvent, useState } from "react";
import InputField from "../shared/InputField";
import option from "../data/fields-contact.json";
import TextArea from "../shared/TextArea";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    fetch("http://localhost:3000/send", {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }
  function resetForm() {
    setEmail("");
    setName("");
    setTelephone("");
    setMessage("");
  }
  return (
    <>
      <section className="top-section">
        <article className="top-content">
          <h1>Contact us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            a, lacus at sodales in. Tempus sit diam dui at ante amet. Ut donec
            mi feugiat et pellentesque tempus amet mauris. Posuere leo pharetra,
            tempus nunc, enim, sit leo amet.
          </p>
        </article>
      </section>
      <form onSubmit={handleSubmit}>
        <InputField state={[name, setName]} options={option.name} />
        <InputField state={[email, setEmail]} options={option.email} />
        <InputField
          state={[telephone, setTelephone]}
          options={option.telephone}
        />
        <TextArea state={[message, setMessage]} options={option.message} />
        <button type="submit" className="button-main">
          Send
        </button>
      </form>
    </>
  );
}
