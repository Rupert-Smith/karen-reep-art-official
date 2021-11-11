import React from "react";
import Gallery from "react-grid-gallery";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../../UI/SectionTitleBox/SectionTitleBox";

import OTHERPETS from "../../../assets/images/gallery/other-pets/index";

function ColorGallery(props) {
  const otherPets = [];

  for (const [key, value] of Object.entries(OTHERPETS)) {
    if (key.includes("wide")) {
      otherPets.push({
        src: value,
        thumbnail: value,
        thumbnailWidth: 672,
        thumbnailHeight: 520,
        customOverlay: <div className="image-overlay"></div>,
      });
      continue;
    }
    otherPets.push({
      src: value,
      thumbnail: value,
      thumbnailWidth: 412,
      thumbnailHeight: 520,
      customOverlay: <div className="image-overlay"></div>,
    });
  }

  return (
    <div className="gallery-wrapper">
      <SectionTitleBox
        id="other-pets-titlebox"
        className="gallery-title-wrapper"
      >
        <SectionTitle className="gallery-title">Other Pets</SectionTitle>
      </SectionTitleBox>
      <Gallery
        rowHeight={290}
        // className="black-and-white-photos"
        images={otherPets}
        backdropClosesModal={true}
        enableImageSelection={false}
      />
      ,
    </div>
  );
}

export default ColorGallery;
