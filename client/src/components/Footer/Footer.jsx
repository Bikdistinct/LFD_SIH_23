import React from "react";
import './footer.css';
function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <p>Random Name</p>
        <p id="logo-des">
          Seborrheic dermatitis,24 psoriasis vulgaris,25,26 genital herpes,27,28
          skin burns,5,29 diabetes (type 2),30 HIV infection,31 cancer
          prevention wound healing (results of n
        </p>
      </div>
      <div className="fmenu">
        <p id="fmenu-list">Home</p>
        <p id="fmenu-list">Properties</p>
        <p id="fmenu-list">Cure</p>
        <p id="fmenu-list">About Us</p>
        <p id="fmenu-list">Contact</p>
      </div>
      <div className="copyrht">
        <p>Copyright © 2023 | All Rights Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
