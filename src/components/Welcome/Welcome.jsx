import React from "react";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import "../../assets/styles/css/main.css";
// import classes from "./_welcome.module.scss"
import Section from "../UI/Section/Section";
import SectionParagraph from "../UI/SectionParagraph/SectionParagraph";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import styles from "./_welcome.module.scss";

import dogIcon from "../../assets/images/icons/dog-icon.png";

function Welcome(props) {
  return (
    <Section id={styles["welcome"]}>
      <SectionTitleBox>
        <SectionTitle>
          Welcome to Karen Reep Art: Creating Memories
        </SectionTitle>
      </SectionTitleBox>

      <SectionParagraph id={styles["welcome-paragraph"]}>
        Hi, this is{" "}
        <Link
          className={`${styles["inline-link"]} ${styles["inline-link-red"]}`}
          smooth={true}
          duration={500}
          to="about"
        >
          Karen
        </Link>{" "}
        . <strong>Welcome to my website</strong>. I am a sister on a paediatric
        ward and drawing animals is my secret passion. I’ll draw your pet for a
        fare price, just{" "}
        <Link
          className={`${styles["inline-link"]} ${styles["inline-link-red"]}`}
          smooth={true}
          duration={500}
          to="contact"
        >
          email me
        </Link>{" "}
        and send photos of your precious pet{" "}
        <img className={styles["dog-icon"]} src={dogIcon} />
      </SectionParagraph>
    </Section>
  );
}

export default Welcome;
