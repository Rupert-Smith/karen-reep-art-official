import React from "react";
import "../../../assets/styles/css/main.css";

function StepNumber(props) {
  return (
    <div className={`stepNumber ${props.className}`}>{props.children}</div>
  );
}

export default StepNumber;
