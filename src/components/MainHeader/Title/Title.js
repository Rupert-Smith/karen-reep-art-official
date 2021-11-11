import React, { useState } from "react";
import "../../../assets/styles/css/main.css";

const Title = (props) => {
  return (
    <div className="title-section">
      <h1 className="main-title">Karen Reep Art</h1>
      <h2 className="main-subtitle">Commissioned Fine Art Pet Portraits</h2>
      <nav
        className="hamburger-menu"
        onClick={() => {
          props.showHamburgerFunction(!props.showHamburger);
        }}
      >
        <ion-icon name="menu-outline"></ion-icon>
      </nav>
    </div>
  );
};

export default Title;
