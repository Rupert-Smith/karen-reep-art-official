import React from "react";
import classes from "./Section.module.css";

function Section(props) {
  return (
    <section id={props.id} className={`${classes.section} ${props.className}`}>
      {props.children}
    </section>
  );
}

export default Section;
