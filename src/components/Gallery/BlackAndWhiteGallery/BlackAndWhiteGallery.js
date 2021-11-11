import React from "react";
import Gallery from "react-grid-gallery";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../../UI/SectionTitleBox/SectionTitleBox";

import BLACKANDWHITEIMAGES from "../../../assets/images/gallery/black-and-white/index";

function BlackAndWhiteGallery(props) {
  const blackAndWhiteImageCollection = [];

  for (const [key, value] of Object.entries(BLACKANDWHITEIMAGES)) {
    if (key.includes("wide")) {
      blackAndWhiteImageCollection.push({
        src: value,
        thumbnail: value,
        thumbnailWidth: 672,
        thumbnailHeight: 520,
        customOverlay: <div className="image-overlay"></div>,
      });
      continue;
    }
    blackAndWhiteImageCollection.push({
      src: value,
      thumbnail: value,
      thumbnailWidth: 412,
      thumbnailHeight: 520,
      customOverlay: <div className="image-overlay"></div>,
    });
  }

  return (
    <div id="black-and-white-wrapper" className="gallery-wrapper">
      <SectionTitleBox className="gallery-title-wrapper">
        <SectionTitle className="gallery-title">
          Dog Pencil portraits - black and white
        </SectionTitle>
      </SectionTitleBox>
      <Gallery
        rowHeight={290}
        className="black-and-white-photos"
        images={blackAndWhiteImageCollection}
        backdropClosesModal={true}
        enableImageSelection={false}
      />
      ,
    </div>
  );
}

export default BlackAndWhiteGallery;
