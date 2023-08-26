import React, { useEffect } from "react";
import { motion } from "framer-motion"

import "./ContactUs.css";
import Contact from "../../components/Contact/Contact";
import peopleimg from "../../assets/peopleimage.webp";
import GoogleMap from "../../components/GoogleMap/Googlemap";
import GoToTop from "../../components/GoToTop/GoToTop";
import Whatsapp from "../../components/GoToTop/Whatsapp";

const ContactUs = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="contact-line-break"><br /><br /><br /></div>
      <div className="contact-container relative">
        <motion.div className="peopleimgc flex items-center ">
          <img src={peopleimg} alt="" className="" loading="lazy" />
        </motion.div>
        <motion.div className="bg-amber-400 w-full h-[50vh] opacity-50 absolute top-0 flex items-center justify-center contact-yellow-cover">
          <br />
          <br />
          <br />
        </motion.div>
        <div className="h-[50vh] w-[100vw] flex-col items-center text-center opacity-100  absolute   font-bold text-slate-100 about-heading">
          <br />
          <br />
          <br />
          <motion.h4
            whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-2xl uppercase text-black">
            Get in touch with us
          </motion.h4>
          <br />
          <motion.h2
            whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-5xl uppercase text-black">You've come to <span className="text-slate-200 font-bold">right place</span></motion.h2>
        </div>
      </div>

      <br /><br />
      <div className="flex flex-col items-center justify-center ">
        <Contact />
      </div>
      <br /><br /><br /><br />
      <div className="mt-4 mb-4 shadow-xl">
        <GoogleMap />
      </div>
      <div className="flex items-center justify-between up-arrow">
        <GoToTop />
        <Whatsapp />
      </div>
    </div>
  );
};

export default ContactUs;
