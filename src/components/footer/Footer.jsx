/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">MINGEN</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mingen-xiao/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://twitter.com/LucasSMYXME" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
      </div>
    
      <div className="footer__copyright">
        <small>&copy; MINGEN Portfolio. All rights reserved.</small>  {/* &copy; -> COPY RIGHTS SIGN */}
      </div>
    </footer>
  );
};

export default Footer;
