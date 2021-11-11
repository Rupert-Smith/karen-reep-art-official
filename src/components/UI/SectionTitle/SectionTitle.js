import React from "react";
import "../../../assets/styles/css/main.css";

function SectionTitle(props) {
  return (
    <h2 className={`sectionTitle ${props.className}`}>{`${props.children}`}</h2>
  );
}

export default SectionTitle;
