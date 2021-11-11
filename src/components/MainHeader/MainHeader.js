import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Title from "./Title/Title";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Hero from "./Hero/Hero";
import SocialMediaColorIcons from "./SocialMediaColorIcons/SocialMediaColorIcons";
import Route from "react-router-dom";

const MainHeader = (props) => {
  const classes = "main-header-container " + props.className;

  const [showMenu, setShowMenu] = useState(false);

  React.useEffect(() => {
    function handleResize() {
      setShowMenu(false);
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header className={classes}>
      <SocialMediaColorIcons />
      <Title showHamburger={showMenu} showHamburgerFunction={setShowMenu} />
      <Navigation contactId={props.contactId} />
      {showMenu ? <MobileNavigation /> : ""}

      <Hero />
    </header>
  );
};

export default MainHeader;
