import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import emailjs from "@emailjs/browser";
// import { client } from '../../client';
import "./Footer.scss";

type FormData = {
  username: string;
  email: string;
  message: string;
};

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // import.meta.env.REACT_APP_EMAILJS_SERVICE_ID
        "service_xqxk6ue",
        // import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID
        "template_egzz8rv",
        {
          from_name: formData.username,
          to_name: "Soumyajit Ghosh",
          from_email: formData.email,
          to_email: "soumyajitghosh.official@gmail.com",
          message: formData.message,
        },
        // import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY
        "7i31xO6AKmAlvnm8U"
      )
      .then(
        () => {
          setLoading(false);
          setIsFormSubmitted(true);
          setFormData({
            username: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:soumyajitghosh.official@gmail.com" className="p-text">
            soumyajitghosh.official@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+91 9674447085" className="p-text">
            +91 9674447085
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={formData.message}
              name="message"
              // onChange={(e: React.ChangeEvent): void => handleChange(e)}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="p-text"
            // onClick={(e: React.ChangeEvent<HTMLElement>): void => handleSubmit}
            onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap({
  Component: MotionWrap(Footer, "app__footer"),
  idName: "contact",
  classNames: "app__whitebg",
});
