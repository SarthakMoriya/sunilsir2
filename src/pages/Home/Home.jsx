import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion"
import Counter from "../../components/Counter/Counter";
import "./Home.css";

import peopleimg from "../../assets/homepeopleimg.webp";

import homepageimg from "../../assets/homepageimg.webp";
import Service from "../Services/Service";
// import Review from "../../components/Reviews/Review";
import University from "./University/University";
import Contact from "../../components/Contact/Contact";
import Passion from "../../components/Passion/Passion";
import Testimonials from "../../components/testimonial/Testimonials";
import GoToTop from "../../components/GoToTop/GoToTop";
import Whatsapp from "../../components/GoToTop/Whatsapp.jsx";
const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-[100vw] shiny-element">
      <br /><br /><br /><br /><br /><br />

      <motion.div className="" style={{ scaleX: scrollYProgress }} />
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, }}
        className=" flex justify-center items-center h-[40vh]"
      >
        <div className="flex flex-col">
          <div className=" home-heading text-[40px] text-center ">
            <div className="font-bold text-amber-400 home-heading-content golden-text-animation">
              Explore Diverse Learning Horizons
            </div>
            <div className="font-bold text-center">in a Few Simple Steps</div>
          </div>
          <div className="text-[14px] text-[#666668] text-center">
            One-Stop Solution for Initiating Your University Applications
          </div>

          <div className=" text-center home-heading-btn flex items-center justify-center mt-5">
            <Link className="btn" href="#">
              Get started!
            </Link>
          </div>
        </div>
      </motion.div>
      <br /><br />


      {/* Study abroad starts */}
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center "
      >
        <motion.div
          className="flex justify-center study-abroad-box border-red  ">
          <div className="content flex flex-col items-center  border  w-[40%] study-abroad-box-left shiny-border-all">
            <motion.div
              whileInView={{ scale: [0, .99], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="font-bold text-primary text-6xl mt-[8rem] mb-5 study-abroad-box-left-heading golden-text-animation">
              Study Abroad
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, .9], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="text-xl p-6  study-abroad-box-left-subheading"
            >
              Unlock a world of opportunities with Infinity Immigration Consultant
              platform. Experience life-changing exposure and growth through
              studying abroad. Our mission is to bring students closer to their
              dreams by offering seamless pathways to international education.
              Embrace boundless horizons, broaden your horizons, and embark on a
              transformative journey that will shape your future. Dare to dream
              big and let Infinity Immigration Consultant be your guide to a brighter and more
              promising tomorrow.
            </motion.div>
          </div>
          <div
            className="image-content study-abroad-box-right">
            <img
              src={homepageimg}
              alt=""
              loading="lazy" />
          </div>
        </motion.div>
      </motion.div>
      {/* Study abroad Ends */}

      <br /><br /><br /><br />
      <University />

      {/* People Imgage starts*/}
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        src={peopleimg}
        alt=""
        loading="lazy"
        className=" w-[100vw]  opacity-0 object-contain"
      />
      {/* People Imgage ends*/}
      <br /><br />
      {/* Counter starts */}

      <Counter />
      {/* Counter ends */}
      <br /><br />
      {/* Select Passion Starts */}
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=" flex items-center justify-center text-5xl font-extrabold  ">
        <div className=" p-2 border-b-4 shiny-border mb-8 font-mont font-medium passion-box-heading">
          Choose Your{" "}
          <span className="text-amber-400 uppercase font-mont font-medium passion-box-heading golden-text-animation">
            Field
          </span>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center p-4 text-center passion-container ">
        <Passion name={"Science"} />
        <Passion name={"Accountancy"} />
        <Passion name={"Engineering"} />
        <Passion name={"Management"} />
      </motion.div>
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center p-4 text-center passion-container">
        <Passion name={"Economics"} />
        <Passion name={"Biotechnology"} />
        <Passion name={"Finance"} />
        <Passion name={"Social Studies"} />
      </motion.div>
      <br /><br /><br />


      {/* Select Passion Ends */}
      <Service />
      <br /><br />
      <Contact />
      {/* <Review /> */}
      <div className="">
        <Testimonials />
      </div>
      {/* <a href="https://api.whatsapp.com/send?phone=8544875229&text=Hello%20there!">Send Message on WhatsApp</a> */}
      <div className="flex items-center justify-between up-arrow">
        <GoToTop />
        <Whatsapp />
      </div>

    </div>
  );
};

export default Home;

/**
       {/* <motion.div 
      className="flex items-center justify-center  p-4 counter-container">
        <div className="flex justify-between w-[80%]  p-4  border-b-4 border-t-4 border-amber-400 counter-inner-box">
          <div className="flex flex-col text-6xl  counter-box">
            <div className="flex justify-center items-center text-amber-400 ">
              <Counter end={23} />+
            </div>
            <div className="text-2xl font-bold mt-4">Visa Categories</div>
          </div>
          <div className="flex flex-col text-6xl counter-box">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={30} />+
            </div>
            <div className="text-2xl font-bold mt-4">Team Members</div>
          </div>
          <div className="flex flex-col text-6xl counter-box">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={331} />+
            </div>
            <div className="text-2xl font-bold mt-4">Visa Process</div>
          </div>
          <div className="flex flex-col text-6xl counter-box">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={100} />%
            </div>
            <div className="text-2xl font-bold mt-4">Success Rate</div>
          </div>
        </div>
      </motion.div> 
 */