import React from "react";
import "../../../assets/styles/css/main.css";

function SectionTitleBox(props) {
  return (
    <div id={props.id} className={`sectionTitleBox ${props.className}`}>
      {props.children}
    </div>
  );
}

export default SectionTitleBox;
