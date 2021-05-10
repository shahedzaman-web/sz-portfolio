import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_9sdXr7G4CSyFcvChV6tfO");
const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1zmcspb",
        "template_zw7lrd8",
        e.target,
        "user_9sdXr7G4CSyFcvChV6tfO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact p-lg-3 m-lg-5 m-5 p-5">
      <div className="section-header text-center text-white mb-2">
        <h2>Contact</h2>
        <h1>Get In Touch</h1>
      </div>
      <div className="col-md-8 col-sm-12 mx-auto">
        <form className="contact-form d-flex flex-column" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <br />
          <label className="form-group text-light">Name</label>
          <input type="text" name="user_name" />
          <label className="form-group text-light">Email</label>
          <input type="email" name="user_email" />
          <label className="form-group text-light">Message</label>
          <textarea name="message" />
          <input
            className="btn btn-success mt-3 col-md-2 mx-auto"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
