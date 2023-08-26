import React, { Component } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountryCard from "../Cards/CountryCard/CountryCard";

import nz from "../../assets/Country/nz.webp";
import aus from "../../assets/Country/austrailia.webp";
import canada from "../../assets/Country/canada.webp";
import europe from "../../assets/Country/europe.webp";
import london from "../../assets/Country/london.webp";
import usa from "../../assets/Country/usa.webp";

import cngif from "../../assets/Country/canadagif.gif";
import ergif from "../../assets/Country/Europe-Flag.gif";
import ausgif from "../../assets/Country/ausgif.gif";
import nzgif from "../../assets/Country/nzgif.gif";
import usagif from "../../assets/Country/usagif.gif";
import ukgif from "../../assets/Country/ukflag.gif";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <motion.div
          whileInView={{  opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold "
        >
          <div className="border-b-4 border-b-amber-400 pb-2">
            Countries we offer support
          </div>
        </motion.div>
        <motion.div
          whileInView={{  opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center justify-center mt-5 text-3xl country-heading-2 text-center"
        >
          <span>Immigration & Visa Services {"   "}</span> <br />
          <span className=" text-4xl font-extrabold ml-3">
            Following Countries
          </span>
        </motion.div>
        <br />
        <br />
        <br />
        <Slider {...settings}>
          <div className="mx-2">
            <CountryCard
              cc={canada}
              name={"Canada"}
              gif={cngif}
              className="flex-1 "
            />
          </div>
          <div className="mx-2">
            <CountryCard
              cc={usa}
              name={"USA"}
              gif={usagif}
              className="flex-1 "
            />
          </div>
          <div className="mx-2">
            <CountryCard
              cc={europe}
              name={"Europe"}
              gif={ergif}
              className="flex-1 "
            />
          </div>
          <div className="mx-2">
            <CountryCard
              cc={nz}
              name={"New Zealand"}
              gif={nzgif}
              className="flex-1 mt-2 ml-5"
            />
          </div>
          <div className="mx-2">
            <CountryCard
              cc={london}
              name={"London"}
              gif={ukgif}
              className="flex-1 mt-2 "
            />
          </div>
          <div className="mx-2">
            <CountryCard
              cc={aus}
              name={"Australia"}
              gif={ausgif}
              className="flex-1 mt-2 "
            />
          </div>
        </Slider>
      </div>
    );
  }
}

// import { useEffect } from "react";
// import { useState } from "react";
// import "./crousal.css";
// import image1 from '../../assets/aboutusimg.jpg';
// function Carousel({ images }) {
//   const [current, setCurrent] = useState(0);
//   const [autoPlay, setAutoPlay] = useState(true);
//   let timeOut = null;

//   useEffect(() => {
//     timeOut =
//       autoPlay &&
//       setTimeout(() => {
//         slideRight();
//       }, 2500);
//   });

//   const slideRight = () => {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   };

//   const slideLeft = () => {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   };
//   console.log(current);
//   return (
//     <div
//       className="carousel"
//       onMouseEnter={() => {
//         setAutoPlay(false);
//         clearTimeout(timeOut);
//       }}
//       onMouseLeave={() => {
//         setAutoPlay(true);
//       }}
//     >
//       <div className="carousel_wrapper">
//         {images.map((image, index) => {
//           return (
//             /* (condition) ? true : false */

//             <div
//               key={index}
//               className={
//                 index == current
//                   ? "carousel_card carousel_card-active"
//                   : "carousel_card"
//               }
//             >
//               <img className="card_image" src={image1} alt="" />
//               <div className="card_overlay">
//                 <h2 className="card_title">{image.title}</h2>
//               </div>
//             </div>
//           );
//         })}
//         <div className="carousel_arrow_left" onClick={slideLeft}>
//           &lsaquo;
//         </div>
//         <div className="carousel_arrow_right" onClick={slideRight}>
//           &rsaquo;
//         </div>
//         <div className="carousel_pagination">
//           {images.map((_, index) => {
//             return (
//               <div
//                 key={index}
//                 className={
//                   index == current
//                     ? "pagination_dot pagination_dot-active"
//                     : "pagination_dot"
//                 }
//                 onClick={() => setCurrent(index)}
//               ></div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;
