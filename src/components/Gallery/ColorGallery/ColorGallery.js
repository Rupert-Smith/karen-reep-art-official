import React from "react";
import Gallery from "react-grid-gallery";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../../UI/SectionTitleBox/SectionTitleBox";

import COLORIMAGES from "../../../assets/images/gallery/color/index";

function ColorGallery(props) {
  const colorImageCollection = [];

  for (const [key, value] of Object.entries(COLORIMAGES)) {
    if (key.includes("wide")) {
      colorImageCollection.push({
        src: value,
        thumbnail: value,
        thumbnailWidth: 672,
        thumbnailHeight: 520,
        customOverlay: <div className="image-overlay"></div>,
      });
      continue;
    }
    colorImageCollection.push({
      src: value,
      thumbnail: value,
      thumbnailWidth: 412,
      thumbnailHeight: 520,
      customOverlay: <div className="image-overlay"></div>,
    });
  }

  return (
    <div className="color-wrapper gallery-wrapper">
      <SectionTitleBox className="gallery-title-wrapper">
        <SectionTitle className="gallery-title">
          Dog Pencil portraits - color
        </SectionTitle>
      </SectionTitleBox>
      <Gallery
        rowHeight={290}
        className="black-and-white-photos"
        images={colorImageCollection}
        backdropClosesModal={true}
        enableImageSelection={false}
      />
      ,
    </div>
  );
}

export default ColorGallery;
