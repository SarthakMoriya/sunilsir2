import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion"
import Counter from "../../pages/About/Counter/Counter";
import "./Home.css";

import peopleimg from "../../assets/homepeopleimg.jpg";

import homepageimg from "../../assets/homepageimg.jpg";
import Service from "../Services/Service";
import Review from "../../components/Reviews/Review";
import University from "./University/University";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);
  const { scrollYProgress } = useScroll();
  return (
    <div className="w-[100vw]">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <motion.div className="" style={{ scaleX: scrollYProgress }}/>
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center h-[40vh]"
      >
        <div className="flex flex-col">
          <div className="  text-[40px] ">
            <div className="font-bold text-amber-400">
              Explore Diverse Learning Horizons
            </div>
            <div className="font-bold text-center">in a Few Simple Steps</div>
          </div>
          <div className="text-[14px] text-[#666668] text-center">
            One-Stop Solution for Initiating Your University Applications
          </div>

          <div className="flex items-center justify-center mt-5">
            <Link class="btn" href="#">
              Get started!
            </Link>
          </div>
        </div>
      </motion.div>
      <br />
      <br />

      {/* Study abroad starts */}
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <div className="flex justify-center">
          <div className="content flex flex-col items-center  border  w-[40%]">
            <div className="font-bold text-primary text-6xl mt-[8rem] mb-5">
              Study Abroad
            </div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="text-xl p-6 "
            >
              Unlock a world of opportunities with Godspeed's global education
              platform. Experience life-changing exposure and growth through
              studying abroad. Our mission is to bring students closer to their
              dreams by offering seamless pathways to international education.
              Embrace boundless horizons, broaden your horizons, and embark on a
              transformative journey that will shape your future. Dare to dream
              big and let Godspeed be your guide to a brighter and more
              promising tomorrow.
            </motion.div>
          </div>
          <div className="image-content">
            <img src={homepageimg} alt="" />
          </div>
        </div>
      </motion.div>
      {/* Study abroad Ends */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <University />
      <br />
      <br />
      <br />
      <br />

      {/* People Imgage starts*/}
      <motion.img
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        src={peopleimg}
        alt=""
        className="h-[80vh] w-[100vw] contrast-100 grayscale opacity-0"
      />
      {/* People Imgage ends*/}
      {/* Counter starts */}
      <br />
      <br />
      <motion.div 
      className="flex items-center justify-center  p-4 ">
        <div className="flex justify-between w-[80%]  p-4  border-b-4 border-t-4 border-amber-400">
          <div className="flex flex-col text-6xl ">
            <div className="flex justify-center items-center text-amber-400 ">
              <Counter end={23} />+
            </div>
            <div className="text-2xl font-bold mt-4">Visa Categories</div>
          </div>
          <div className="flex flex-col text-6xl">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={30} />+
            </div>
            <div className="text-2xl font-bold mt-4">Team Members</div>
          </div>
          <div className="flex flex-col text-6xl">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={331} />+
            </div>
            <div className="text-2xl font-bold mt-4">Visa Process</div>
          </div>
          <div className="flex flex-col text-6xl">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={100} />%
            </div>
            <div className="text-2xl font-bold mt-4">Success Rate</div>
          </div>
        </div>
      </motion.div>
      {/* Counter ends */}
      {/* Select Passion Starts */}
      <br />
      <br />
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className=" flex items-center justify-center text-5xl font-extrabold ">
        <div className=" p-2 border-b-4 border-amber-400 mb-8 font-mont font-medium">
          Choose Your{" "}
          <span className="text-amber-400 uppercase font-mont font-medium">
            Field
          </span>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center p-4 text-center flex-wrap">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="uppercase text-xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Science
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="uppercase text-xl font-bold border  p-3 ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Accountancy
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="uppercase text-xl font-bold border  p-3 ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Engineering
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="uppercase text-xl font-bold border  p-3 ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Management
        </motion.div>
      </motion.div>
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center p-4 text-center flex-wrap">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="uppercase text-xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Economic
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="uppercase text-xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Biotechnology
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="uppercase text-xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Finance
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="uppercase text-xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:animate-pulse hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Social Studies
        </motion.div>
      </motion.div>
      <br />
      <br />
      <br />
      {/* Select Passion Ends */}
      <Service />
      {/* <Contact/> */}
      {/* <Review /> */}
      {/* <a href="https://api.whatsapp.com/send?phone=8544875229&text=Hello%20there!">Send Message on WhatsApp</a> */}
      <br /><br />
      <div className="flex flex-col items-center justify-center ">
        <Contact />
      </div>
      <br /><br /><br /><br />
    </div>
  );
};

export default Home;
