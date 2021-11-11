import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../assets/styles/css/main.css";

import dogOne from "../../assets/images/carousel/dog1.jpg";
import dogTwo from "../../assets/images/carousel/dog2.jpg";
import dogThree from "../../assets/images/carousel/dog3.jpg";
import dogFour from "../../assets/images/carousel/dog4.jpg";
import dogFive from "../../assets/images/carousel/dog5.jpg";
import dogSix from "../../assets/images/carousel/dog6.jpg";
import dogNine from "../../assets/images/carousel/dog9.jpg";
import dogEleven from "../../assets/images/carousel/dog11.jpg";
import CarouselBox from "./CarouselBox";

// function Carousel() {
class Carousel extends React.Component {
  render() {
    const slider_settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 500,
      focusOnSelect: true,

      // responsive: [
      //   {
      //     breakpoint: 1068,
      //     settings: {
      //       slidesToShow: 1,
      //       centerPadding: "0px",
      //       slidesToScroll: 1,
      //       initialSlide: 3,
      //     },
      //   },
      // ],

      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            centerPadding: "0px",
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            centerPadding: "0px",
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            centerPadding: "40px",
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            centerPadding: "80px",
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 3,
            centerPadding: "0px",
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
      ],
    };
    return (
      <section className="carousel-section-container">
        <Slider {...slider_settings}>
          <div>
            <img src={dogOne} />
          </div>
          <div>
            <img src={dogTwo} />
          </div>
          <div>
            <img src={dogEleven} />
          </div>
          <div>
            <img src={dogFour} />
          </div>
          <div>
            <img src={dogNine} />
          </div>
          <div>
            <img src={dogThree} />
          </div>
        </Slider>
      </section>
    );
  }
}

export default Carousel;

// import React from "react";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// class Carousel extends React.Component {
//   render() {
//     let settings_3 = {
//       dots: false,
//       autoplay: false,
//       autoplaySpeed: 3000,
//       slidesToShow: 6,

// responsive: [
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 2,
//       initialSlide: 2,
//     },
//   },
// ],
//     };
//     return (
//       <Slider {...settings_3}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     );
//   }
// }

// export default Carousel;
