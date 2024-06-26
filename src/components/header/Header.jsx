import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/head-photo-removebg-preview.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mingen Xiao</h1>
        <h4 className="text-light">Full-Stack Developer</h4>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img className="photo" src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down 一一
        </a>
      </div>
    </header>
  );
};

export default Header;
