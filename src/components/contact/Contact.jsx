/* eslint-disable jsx-a11y/anchor-is-valid */
import "./contact.css";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import React, { useRef } from "react"; // https://www.emailjs.com/docs/examples/reactjs/
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qjz9kur",
      "template_h4rx19j",
      form.current,
      "4bMwAScOwmglFG-cd"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a
            className="contact__option"
            href="mailto:mingen_xiao97@163.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineMarkEmailUnread className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mingen_xiao97@163.com</h5>
            <a>Send a message</a>
          </a>
          <a
            className="contact__option"
            href="https://www.linkedin.com/in/mingen-xiao/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>MINGEN XIAO</h5>
            <a>Send a message</a>
          </a>
          <a
            className="contact__option"
            href="https://api.whatsapp.com/send?phone=+8613726327876"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Mingen</h5>
            <a>Send a message</a>
          </a>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />{" "}
          {/* name=: 文本框内需要填入的信息内容 */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />{" "}
          {/* name=: 文本框内需要填入的信息内容 */}
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>{" "}
          {/* name=: 文本框内需要填入的信息内容 */}
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
