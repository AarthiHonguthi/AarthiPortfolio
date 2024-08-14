import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mlr4t0o",
        "template_4lst42e",
        formRef.current,
        "7CA2ByKI4WJrhWooy"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(null);
          formRef.current.reset(); // Clear the form fields after successful submission
        },
        (error) => {
          setError(
            "There was an error sending your message. Please try again."
          );
          setSuccess(false);
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Get in Touch</h1>
        <h2>Contact:</h2>
        <div className="item">
          <h2>Mail</h2>
          <span>aarthihonguthi025@gmail.com</span>
        </div>
        <div className="item">
          <h2>Instagram</h2>
          <a
            href="https://www.instagram.com/aarthi_honguthi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aarthi_honguthi
          </a>
        </div>
        <div className="item">
          <h2>LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/aarthi-honguthi-b01838257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Aarthi's profile
          </a>
        </div>
      </div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}
          {success && (
            <p className="success">Your message was sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
