import React from "react";
import '../../Variables.css'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container ps-3 pe-5">
    <div>
        <p id="rights">© 2024 CodeIT. All rights reserved.</p>
    </div>
    <div className="footer-links">
        <a className="footer-link">About</a>
        <a className="footer-link">Contact Us</a>
    </div>
    </div>
  );
};

export default Footer;