import React from "react";
import "../../../assets/styles/css/main.css";
import facebook from "../../../assets/images/social-media/facebook.png";
import instagram from "../../../assets/images/social-media/instagram.png";
import framd from "../../../assets/images/social-media/framd.png";

function SocialMediaColorIcons() {
  return (
    <div className="social-media-icons-color">
      <a
        target="_blank"
        href="https://www.facebook.com/Karens-art-creating-memories-608476719664499"
      >
        <img src={facebook} alt="Facebook icon" />
      </a>
      <a target="_blank" href="https://www.instagram.com/karens_art_for_you/">
        <img src={instagram} alt="Instagram icon" />
      </a>
      <a
        target="_blank"
        href="https://www.getframd.com/profile/karen-reep/20921"
      >
        <img src={framd} alt="Framd icon" />
      </a>
    </div>
  );
}

export default SocialMediaColorIcons;
