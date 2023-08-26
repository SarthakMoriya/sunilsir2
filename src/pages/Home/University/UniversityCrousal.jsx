import React, { Component } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "./University.css";
import uni1 from "../../../assets/universities/uni1.webp";
import uni2 from "../../../assets/universities/uni2.webp";
import uni3 from "../../../assets/universities/uni3.webp";
import uni4 from "../../../assets/universities/uni4.webp";
import uni5 from "../../../assets/universities/uni6.webp";
import uni6 from "../../../assets/universities/uni5.webp";
// import uni7 from "../../../assets/universities/uni7.webp";
import uni8 from "../../../assets/universities/uni6b.webp";

export default class UniversityCrousal extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <motion.div
            whileInView={{ scale: [0, 0.8], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-[25%] h-[50%}"
          >
            <img src={uni1} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 0.8], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-[25%] h-[50%}"
          >
            <img src={uni2} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 0.8], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-[25%] h-[50%}"
          >
            <img src={uni3} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 0.8], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-[25%] h-[50%}"
          >
            <img src={uni4} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 0.8], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-[25%] h-[50%}"
          >
            <img src={uni5} alt="" />
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 0.8], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-[25%] h-[50%}"
          >
            <img src={uni6} alt="" />
          </motion.div>
          {/* <motion.div
            whileInView={{ scale: [0, 0.8], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-[25%] h-[50%}"
          >
            <img src={uni7} alt="" />
          </motion.div> */}
          <motion.div
            whileInView={{ scale: [0, 0.8], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
            }}
            className="flex items-center justify-center w-[25%] h-[50%}"
          >
            <img src={uni8} alt="" />
          </motion.div>
        </Slider>
      </div>
    );
  }
}
