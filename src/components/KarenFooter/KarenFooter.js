import React from "react";
import "../../assets/styles/css/main.css";
import instagramGrey from "../../assets/images/social-media/instagram-grey-small.png";
import facebookGrey from "../../assets/images/social-media/facebook-grey-small.png";
import framdGrey from "../../assets/images/social-media/framd-grey-small.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

function KarenFooter() {
  return (
    <footer className="karen-footer-container">
      <nav className="footer-navigation side-column">
        <NavLink className="footer-link-element" to="/">
          Home
        </NavLink>
        <NavLink className="footer-link-element" to="/#about">
          About
        </NavLink>
        <NavLink
          activeClassName="nav-link-element-active"
          className="footer-link-element"
          to="/gallery"
        >
          Gallery
        </NavLink>
        <NavLink
          activeClassName="nav-link-element-active"
          className="footer-link-element"
          to="/prices"
        >
          Prices
        </NavLink>
        <Link
          className="footer-link-element"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </nav>
      <h2 className="footer-heading">Karen Reep Art</h2>
      <div className="footer-contact">
        <div className="footer-email">Email: karenreep1234@icloud.com</div>
        <div className="footer-phone-number">Phone: 07944 872769</div>
      </div>
      <div className="footer-icons side-column">
        <a
          target="_blank"
          href="https://www.facebook.com/Karens-art-creating-memories-608476719664499"
        >
          <img src={facebookGrey} />
        </a>
        <a target="_blank" href="https://www.instagram.com/karens_art_for_you/">
          <img src={instagramGrey} />
        </a>
        <a
          target="_blank"
          href="https://www.getframd.com/profile/karen-reep/20921"
        >
          <img src={framdGrey} />
        </a>
      </div>
      <div className="footer-copywrite">
        ©2021 Karen Art - All Rights Reserved
      </div>
      {/* <div className="karen-footer-wrapper">
        <div className="footer-column footer-column-navigation footer-column-side">
          <ul className="footer-navigation">
            <NavLink className="footer-link-element" to="/">
              Home
            </NavLink>
            <NavLink className="footer-link-element" to="/#about">
              About
            </NavLink>
            <NavLink
              activeClassName="nav-link-element-active"
              className="footer-link-element"
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              activeClassName="nav-link-element-active"
              className="footer-link-element"
              to="/prices"
            >
              Prices
            </NavLink>
            <Link
              className="footer-link-element"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </ul>
        </div>
 
        
      </div>
     */}
    </footer>
  );
}

export default KarenFooter;
