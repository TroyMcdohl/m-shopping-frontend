import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbriolp",
        "template_3uj2wvn",
        form.current,
        "u4rHatWL9o1AK2TOF"
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
    <div className="form_container" id="contact">
      <form ref={form} onSubmit={sendEmail} className="form_wrapper">
        <h4 className="form_title">Contact Me</h4>
        <div className="form_fact">
          <label className="form_label">Name</label>
          <input className="form_input" type="text" name="user_name" />
        </div>
        <div className="form_fact">
          <label className="form_label">Email</label>
          <input className="form_input" type="email" name="user_email" />
        </div>
        <div className="form_fact">
          <label className="form_label">Message</label>
          <textarea name="message" className="form_input" />
        </div>
        <input type="submit" value="Send" className="form_btn" />
      </form>
    </div>
  );
};

export default Contact;
