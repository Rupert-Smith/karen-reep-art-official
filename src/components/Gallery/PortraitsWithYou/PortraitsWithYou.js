import React from "react";
import Gallery from "react-grid-gallery";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../../UI/SectionTitleBox/SectionTitleBox";

import PORTRAITSWITHYOU from "../../../assets/images/gallery/customer/index";

function PortraitsWithYou(props) {
  const portraitsWithYou = [];

  for (const [key, value] of Object.entries(PORTRAITSWITHYOU)) {
    if (key.includes("wide")) {
      portraitsWithYou.push({
        src: value,
        thumbnail: value,
        thumbnailWidth: 672,
        thumbnailHeight: 520,
        customOverlay: <div className="image-overlay"></div>,
      });
      continue;
    }
    portraitsWithYou.push({
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
          Portraits with you
        </SectionTitle>
      </SectionTitleBox>
      <Gallery
        rowHeight={290}
        className="black-and-white-photos"
        images={portraitsWithYou}
        backdropClosesModal={true}
        enableImageSelection={false}
      />
      ,
    </div>
  );
}

export default PortraitsWithYou;
