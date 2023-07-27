import React from "react";
import { motion } from "framer-motion";

import './University.css'
import uni1 from "../../../assets/universities/uni1.png";
import uni2 from "../../../assets/universities/uni2.png";
import uni3 from "../../../assets/universities/uni3.png";
import uni4 from "../../../assets/universities/uni4.jpg";
import uni5 from "../../../assets/universities/uni6.png";
import uni6 from "../../../assets/universities/uni5.png";
import uni7 from "../../../assets/universities/uni7.png";
import uni8 from "../../../assets/universities/uni6b.png";

const University = () => {
  return (
    <div>

      <div className="flex items-center justify-around  flex-wrap uni-box">
        <motion.div
          whileInView={{ scale: [0, .8,], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
          className=""
        >
          <img src={uni1} alt="" />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, .8,], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
          className=""
        >
          <img src={uni2} alt="" />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, .8,], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
          className=""
        >
          <img src={uni3} alt="" />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, .8,], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
          className=""
        >
          <img src={uni4} alt="" />
        </motion.div>
      </div>
      <div className="flex items-center justify-around  flex-wrap uni-box">
        <motion.div
          whileInView={{ scale: [0, .8,], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
          className=""
        >
          <img src={uni5} alt="" />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, .8,], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
          className=""
        >
          <img src={uni6} alt="" />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, .8,], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
          className=""
        >
          <img src={uni7} alt="" />
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, .8,], opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut", type: "spring", stiffness: 100 }}
          className=""
        >
          <img src={uni8} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default University;
