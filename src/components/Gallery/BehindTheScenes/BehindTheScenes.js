import React from "react";
import Gallery from "react-grid-gallery";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../../UI/SectionTitleBox/SectionTitleBox";

import BEHINDTHESCENES from "../../../assets/images/gallery/behind-the-scenes/index";

function BehindTheScenes(props) {
  const behindTheScenes = [];

  for (const [key, value] of Object.entries(BEHINDTHESCENES)) {
    if (key.includes("wide")) {
      behindTheScenes.push({
        src: value,
        thumbnail: value,
        thumbnailWidth: 672,
        thumbnailHeight: 520,
        customOverlay: <div className="image-overlay"></div>,
      });
      continue;
    }
    if (key.includes("superWide")) {
      behindTheScenes.push({
        src: value,
        thumbnail: value,
        thumbnailWidth: 1000,
        thumbnailHeight: 520,
        customOverlay: <div className="image-overlay"></div>,
      });
      continue;
    }
    behindTheScenes.push({
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
        <SectionTitle className="gallery-title">My Process</SectionTitle>
      </SectionTitleBox>
      <Gallery
        rowHeight={290}
        className="black-and-white-photos"
        images={behindTheScenes}
        backdropClosesModal={true}
        enableImageSelection={false}
      />
      ,
    </div>
  );
}

export default BehindTheScenes;
