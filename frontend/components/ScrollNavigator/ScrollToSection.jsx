// components/ScrollToSection.js
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const ScrollToSection = ({ to, children }) => {
  console.log("to check", to);
  return (
    <ScrollLink
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70} // Adjust the offset if you have a fixed navbar
      duration={500}
    >
      {children}
    </ScrollLink>
  );
};

export default ScrollToSection;
