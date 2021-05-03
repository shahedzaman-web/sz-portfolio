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
    <section className="contact pb-4">
      <div className="container">
        <div className="section-header text-center text-white mb-5">
          <h2 className="text-secondary">Contact</h2>
          <h1>Get In Touch</h1>
        </div>
        <div className="col-md-9 mx-auto ">
          <form
            className="contact-form d-flex flex-column"
            onSubmit={sendEmail}
          >
            <input type="hidden" name="contact_number" />
            <br />
            <label className="form-group">Name</label>
            <input type="text" name="user_name" />
            <label className="form-group">Email</label>
            <input type="email" name="user_email" />
            <label className="form-group">Message</label>
            <textarea name="message" />
            <input
              className="btn btn-success mt-3"
              type="submit"
              value="Send"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
