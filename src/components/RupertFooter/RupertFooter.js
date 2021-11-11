import React from "react";
import "../../assets/styles/css/main.css";

function RupertFooter(props) {
  const emoji = require("emoji-dictionary");
  const wrench = emoji.getUnicode("wrench");
  const technologist = emoji.getUnicode("man_technologist");
  const highVoltage = emoji.getUnicode("high_voltage_sign");

  return (
    <section className="rupertfooter-container">
      ©2021 Website designed & developed by Rupert Smith at
      rupertwebdev@gmail.com {technologist} www.linkedin.com/in/rupertwebdev
    </section>
  );
}

export default RupertFooter;
