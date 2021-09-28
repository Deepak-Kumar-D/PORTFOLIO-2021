import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../css/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="APJ Abdul Kalam" />

          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" placeholder="kalam@india.com" />

          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Hi, ..." />

          <input type="submit" value="Connect" />
        </form>

        <div className="handles">
          <a
            href="mailto:deepak.kumard36@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <SiGmail />
            E-Mail
          </a>
          <a
            href="https://github.com/Deepak-Kumar-D"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/deepakkumard36/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>

      <h1>
        <hr />
        Contact Me
      </h1>
    </section>
  );
}

export default Contact;
