// import React from "react";
// import "../../assets/styles/css/main-header.css";
// import Card from "./Card/Card";

// const LinkButton = (props) => {
//   const classes = "link-button " + props.className;

//   return <Card className={classes}>{props.children}</Card>;
// };

// export default LinkButton;

import React from "react";
import "../../assets/styles/css/main.css";
import Card from "./Card/Card";
import classes from "./LinkButton.module.css";

const LinkButton = (props) => {
  return (
    <Card className={`${classes.linkButton} ${props.className}`}>
      {props.children}
    </Card>
  );
};

export default LinkButton;
