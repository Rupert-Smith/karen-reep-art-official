import React, { Fragment } from "react";

import MainHeader from "../components/MainHeader/MainHeader";
import "../assets/styles/css/main.css";
import Contact from "../components/Contact/Contact";
import KarenFooter from "../components/KarenFooter/KarenFooter";
import RupertFooter from "../components/RupertFooter/RupertFooter";
import Pricing from "../components/Pricing/Pricing";

function Home(props) {
  return (
    <Fragment>
      <MainHeader contactId={"prices-contact"} className="prices-dog-hero" />
      <Pricing />
      <Contact id="prices-contact" />
      <KarenFooter />
      <RupertFooter />
    </Fragment>
  );
}

export default Home;
