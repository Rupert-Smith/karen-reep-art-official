import React from "react";

function CarouselBox(props) {
  return (
    <div className="carousel-container">
      <img src={props.dogPicture} />
    </div>
  );
}

export default CarouselBox;
