import React, { Fragment } from "react";

import MainHeader from "../components/MainHeader/MainHeader";
import "../assets/styles/css/main.css";
import Contact from "../components/Contact/Contact";
import KarenFooter from "../components/KarenFooter/KarenFooter";
import RupertFooter from "../components/RupertFooter/RupertFooter";
import GalleryPhotos from "../components/Gallery/GalleryPhotos";

function Gallery(props) {
  return (
    <Fragment>
      <MainHeader heroId="gallery" className="gallery-dog-hero" />
      <GalleryPhotos />
      <Contact id="gallery-contact" />
      <KarenFooter />
      <RupertFooter />
    </Fragment>
  );
}

export default Gallery;
