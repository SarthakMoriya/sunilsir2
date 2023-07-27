import React from "react";
import { motion } from "framer-motion"

const Googlemap = () => {
  return (
    <motion.div
      whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
      transition={{ type: "spring", stiffness: 100 }}
      className="">
      <iframe
        title="he"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13586.675509942546!2d74.8820648650513!3d31.642915343914616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39196358df73ecb5%3A0xbefd6c16704e6099!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1690033120371!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-[50vh]"
      ></iframe>
    </motion.div>
  );
};

export default Googlemap;
