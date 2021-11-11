import React from "react";
import Section from "../UI/Section/Section";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import SectionParagraph from "../UI/SectionParagraph/SectionParagraph";
import "../../assets/styles/css/main.css";
import pricingImage from "../../assets/images/pricing/dog6.jpg";
import { Link, animateScroll as scroll } from "react-scroll";

const emoji = require("emoji-dictionary");
// const bone = emoji.getUnicode("bone");
// const pawPrints = emoji.getUnicode("paw_prints");
// const dog = emoji.getUnicode("dog");
const dog2 = emoji.getUnicode("dog2");
// const pencil = emoji.getUnicode("pencil2");
const paper = emoji.getUnicode("page_with_curl");
const box = emoji.getUnicode("package");
const calendar = emoji.getUnicode("calendar");
const memo = emoji.getUnicode("memo");

function Pricing(props) {
  return (
    <Section id="pricing">
      <SectionTitleBox>
        <SectionTitle>How much will my portrait cost?</SectionTitle>
      </SectionTitleBox>
      <div className="pricing-wrapper">
        <img className="pricing-image-mobile" src={pricingImage} />
        <SectionParagraph id="pricing-paragraph">
          <ul>
            {" "}
            <li>
              {dog2} I charge between <strong>£100 to £120</strong> per portrait
            </li>
            <li>
              {" "}
              {paper} I use <strong>good quality A3 paper</strong>
            </li>
            <li>
              {" "}
              {box} Postage is <strong>1st class</strong> recorded delivery at{" "}
              <strong>£10</strong>
            </li>
            <li>
              {calendar} I can take orders up to{" "}
              <strong>1 year in advance</strong>
            </li>
            <li>
              {" "}
              {memo} If you would like a quote, simply{" "}
              <strong>
                fill out the{" "}
                <Link
                  className="inline-link inline-link-blue"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  <strong>form</strong>
                </Link>{" "}
                below
              </strong>
              !
            </li>
          </ul>
        </SectionParagraph>
        <img className="pricing-image" src={pricingImage} />
      </div>
    </Section>
  );
}

export default Pricing;
