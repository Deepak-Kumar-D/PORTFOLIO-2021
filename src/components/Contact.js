import React from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../css/Contact.css";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const obj = await fetch(
      "https://deepak-kumar-d-portfolio.herokuapp.com/connect",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
        mode: "cors",
      }
    );

    if (obj.status === 200) {
      alert("Thank You! Will get in touch with you soon.");
      reset();
    }
  };
  return (
    <section id="contact">
      <div className="contact-container">
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="APJ Abdul Kalam"
            {...register("name", { required: "⚠ Name is required!" })}
          />
          <p className="message">{errors.name && errors.name.message}</p>

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="kalam@india.com"
            {...register("email", { required: "⚠ Email is required!" })}
          />
          <p className="message">{errors.email && errors.email.message}</p>

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Hi, ..."
            {...register("message", { required: "⚠ Message is required!" })}
          />
          <p className="message">{errors.message && errors.message.message}</p>

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
