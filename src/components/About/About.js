import React, { useEffect } from "react";
import "../../assets/styles/css/main.css";
import karenAbout from "../../assets/images/about/karen-about.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

function About(props) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      console.log(location.hash);
      let elem = document.getElementById(location.hash.slice(1));
      console.log(elem);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <section id="about" className="about-container">
      <h2>About</h2>

      <p>
        Hi, I’m Karen and I love drawing peoples pets. For the past 38 years I
        have worked as a Paediatric nurse at Addenbrookes, Great Ormond street
        and the Luton and Dunstable hospital. However I have always loved
        drawing and through the years I’ve drawn many pictures of staff and over
        the last two years I’ve turned my hand to pet portraits. I have drawn
        many pictures which you can view in the{" "}
        <NavLink className="inline-link inline-link-blue" to="/gallery">
          <strong> gallery</strong>
        </NavLink>{" "}
        and I work on a{" "}
        <NavLink className="inline-link inline-link-blue" to="/prices">
          <strong> comission basis</strong>
        </NavLink>{" "}
        . So if you would like a picture drawn of a special pet for yourself or
        a special present just take a look through my website and{" "}
        <Link
          className="inline-link inline-link-blue"
          to="contact"
          smooth={true}
          duration={500}
        >
          <strong>contact me</strong>
        </Link>
        . I tend to use mediums such graphite, charcoal or coloured pencil.
      </p>
      <div className="about-photo-container">
        <img src={karenAbout} className="about-photo" />
      </div>
    </section>
  );
}

export default About;
