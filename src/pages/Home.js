import React, { Fragment } from "react";

import MainHeader from "../components/MainHeader/MainHeader";
import "../assets/styles/css/main.css";
import Welcome from "../components/Welcome/Welcome";
import Carousel from "../components/Carousel/Carousel";
import ThreeEasySteps from "../components/ThreeEasySteps/ThreeEasySteps";
import Reviews from "../components/Reviews/Reviews";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import KarenFooter from "../components/KarenFooter/KarenFooter";
import RupertFooter from "../components/RupertFooter/RupertFooter";

function Home(props) {
  return (
    <Fragment>
      <MainHeader className="home-dog-hero" />
      <Welcome />
      <Carousel />
      <ThreeEasySteps />
      <Reviews />
      <About />
      <Contact id="home-contact" />
      <KarenFooter />
      <RupertFooter />
    </Fragment>
  );
}

export default Home;
