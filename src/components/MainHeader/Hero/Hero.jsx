import React, { useEffect } from "react";
import LinkButton from "../../UI/LinkButton";
import "../../../assets/styles/css/main.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import styles from "./_hero.module.scss";

const Hero = ({ className }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));

      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className={className}>
      <div className={styles["hero-text-box-container"]}>
        <Route path="/" exact>
          <Fade>
            <div
              className={`${styles["hero-text-box"]} ${styles["hero-text-box-home"]}`}
            >
              <h2 className={styles["hero-tagline"]}>
                Capture your pet with a <br></br>custom pencil portrait
              </h2>
              <NavLink to="/#contact">
                <LinkButton
                  className={`${styles["hero-link-button"]} ${styles["link-button-home-full"]}`}
                >
                  Draw my pet
                </LinkButton>
              </NavLink>
              <NavLink to="/#welcome">
                <LinkButton
                  className={`${styles["hero-link-button"]} ${styles["link-button-home-ghost"]}`}
                >
                  Show me more
                </LinkButton>
              </NavLink>
            </div>
          </Fade>
        </Route>
        <Route path="/gallery">
          <div
            className={`${styles["hero-text-box"]} ${styles["hero-text-box-nothome"]}`}
          >
            <h2 className={styles["hero-title"]}>Gallery</h2>
            <Link to="gallery-photos" smooth={true} duration={500}>
              <LinkButton
                className={`${styles["hero-link-button"]} ${styles["link-button-gallery-full"]}`}
              >
                View gallery
              </LinkButton>
            </Link>
          </div>
        </Route>
        <Route path="/prices">
          <div
            className={`${styles["hero-text-box"]} ${styles["hero-text-box-nothome"]}`}
          >
            <h2 className={styles["hero-title"]}>Prices</h2>
            <Link to="contact" smooth={true} duration={500}>
              <LinkButton
                className={`${styles["hero-link-button"]} ${styles["link-button-prices-full"]}`}
              >
                Ask for a quote
              </LinkButton>
            </Link>
            <Link to="pricing" smooth={true} duration={500}>
              <LinkButton
                className={`${styles["hero-link-button"]} ${styles["link-button-prices-full"]}`}
              >
                See pricing
              </LinkButton>
            </Link>
          </div>
        </Route>
      </div>
    </div>
  );
};

export default Hero;
