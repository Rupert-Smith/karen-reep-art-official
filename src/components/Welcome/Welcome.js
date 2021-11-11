import React from "react";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import "../../assets/styles/css/main.css";
import Section from "../UI/Section/Section";
import SectionParagraph from "../UI/SectionParagraph/SectionParagraph";
import { Link, animateScroll as scroll } from "react-scroll";

import dogIcon from "../../assets/images/icons/dog-icon.png";

function Welcome(props) {
  return (
    <Section id="welcome">
      <SectionTitleBox className="welcome-title-box">
        <SectionTitle>
          Welcome to Karen Reep Art: Creating Memories
        </SectionTitle>
      </SectionTitleBox>

      <SectionParagraph id="welcome-paragraph">
        Hi, this is{" "}
        <Link
          className="inline-link inline-link-red"
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
          className="inline-link inline-link-red"
          smooth={true}
          duration={500}
          to="contact"
        >
          email me
        </Link>{" "}
        and send photos of your precious pet{" "}
        <img className="dog-icon" src={dogIcon} />
      </SectionParagraph>
    </Section>
  );
}

export default Welcome;
