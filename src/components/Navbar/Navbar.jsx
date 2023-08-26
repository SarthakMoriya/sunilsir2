import React, { useState } from "react";
import { motion, useScroll } from 'framer-motion'
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import phone from "../../assets/phone-call.png";
import mail from "../../assets/email.png";
import "./Navbar.css";

import { Link } from "react-router-dom";
import ContactModal from "../Modal/ContactModal";

const Navbar = () => {
  const { scrollYProgress } = useScroll()
  const [open, setOpen] = useState(false);
  return (
    <div className="flex-col border border-black-500 w-full fixed z-10">
      {/* Upper Navbar */}
      <div className=" upper-navbar flex bg-neutral-200   w-full justify-around">
        <div className="flex items-center justify-center">
          <div className="flex justify-around w-full p-1 ">
            {/* <div className="p-1 flex items-center  upper-navbar-link">
              <a href="mailto:moriyasarthak@gmail.com" className="p-1 flex items-center  upper-navbar-link">
              <img src={mail} alt="" className="mr-2 w-[32px]" />
              <span className="flex ">infinity.filingimmigration@gmail.com</span>
              </a>
            </div> */}
            <div className="p-1 flex items-center upper-navbar-link">
              <img src={phone} alt="" className="mr-2" />
              <a href="tel:+919988444184">
              <span className="whitespace-nowrap">+91 9988444184</span>
              </a>

            </div>
          </div>
        </div>
        <div className=" p-1">
          <div className=" upper-navbar-social flex justify-around ">
            <div className="p-1 flex items-center">
              <a className="p-1 flex items-center" href="https://www.facebook.com/iimcchdfb" rel="noreferrer" target="_blank" >
                <img src={facebook} alt="" className="mr-2" />
                <span className="hidden sm:inline">Facebook</span>
              </a>
            </div>
            <div className="p-1 flex items-center">
              <a className="p-1 flex items-center" href="mailto:support@infinityiic.in" rel="noreferrer" target="_blank" >
                <img src={mail} alt="" className="mr-2 w-[32px]" />
                <span className="hidden sm:inline">Mail</span>
              </a>
            </div>
            <div className="p-1 flex items-center">
              <a href="https://www.instagram.com/direct/t/17847186186042725" rel="noreferrer" target="_blank" className="p-1 flex items-center">
                <img src={instagram} alt="" className="mr-2" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
            <div className="p-1 flex items-center">
              <a href="https://api.whatsapp.com/send?phone=9988444184&text=Hello%20there!" className="p-1 flex items-center">
                <img src={whatsapp} alt="" className="mr-2 w-[32px]" />
                <span className="hidden sm:inline">Whatsapp</span>
              </a>
              {/* <a href="https://api.whatsapp.com/send?phone=8544875229&text=Hello%20there!">Send Message on WhatsApp</a> */}
            </div>
          </div>
        </div>
      </div>
      {/* Upper navbar ends */}
      {/* main Navbar starts */}
      {/* gold-color */}
      <div className="flex justify-around items-center  p-2 bg-slate-600">
        <div className=" navbar-company  cursor-pointer">
          {/* <img src={logo} alt="Infinity Immigration Consultant" className="logo"/> */}
          <Link to='/' className="whitespace-nowrap text-2xl uppercase font-bold golden-text-animation">Infinty Immigration Consultant</Link>
        </div>

        <div className=" navbar-links mr-2  cursor-pointer transition-all duration-400 ">
          <Link to='/country' className="whitespace-nowrap golden-text-animation-link  text-md font-bold uppercase  lg:golden-text-animation  hover:text-white transition-colors delay-100 ease-in-out">Study Abroad</Link>
        </div>
        <div className=" navbar-links mr-2  uppercase cursor-pointer transition-all duration-400 ">
          <Link
            to="/about"
            className="text-md font-bold golden-text-animation-link hover:text-white transition-colors delay-100 ease-in-out">
            About
          </Link>
        </div>
        {/* <div className=" navbar-links mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 ">
          <Link to="/about" className="text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out">Services</Link>
        </div> */}
        <div className=" navbar-links mr-2 text-md font-bold uppercase cursor-pointer transition-all duration-400 ">
          <Link className=" whitespace-nowrap text-md font-bold golden-text-animation-link hover:text-white transition-colors delay-100 ease-in-out" to='/contact'>Contact Us</Link>
        </div>
        <div className=" navbar-links-booking mr-2 text-md font-medium uppercase cursor-pointer transition-all duration-400  border p-3 rounded-2xl bg-slate-50 hover:bg-slate-300 hover:text-amber-400 whitespace-nowrap"
          onClick={() => { setOpen(!open) }}
        >
          Make An Appointment
        </div>
      </div>

      {/* Tablet Navbar */}
      <div className="tablet-navbar flex justify-around items-center bg-slate-600 p-2 ">
        <div className="mr-2  cursor-pointer transition-all duration-400 ">
          <Link to='/country' className="whitespace-nowrap  text-md font-bold uppercase  lg:text-slate-800  hover:text-white transition-colors delay-100 ease-in-out">Study Abroad</Link>
        </div>
        <div className="mr-2  uppercase cursor-pointer transition-all duration-400 ">
          <Link
            to="/about"
            className="text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out">
            About
          </Link>
        </div>
        {/* <div className="mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 ">
          <Link to="/about" className="text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out">Services</Link>
        </div> */}
        <div className="mr-2 text-md font-bold uppercase cursor-pointer transition-all duration-400 ">
          <Link className=" whitespace-nowrap text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out" to='/contact'>Contact Us</Link>
        </div>
      </div>
      {/* Tablet Navbar Ends */}
      {/* main Navbar ends */}
      <motion.div style={{
        scaleX: scrollYProgress,
        color: 'black',
        backgroundColor: 'black',
        width: '100vw',
        height: '1vh',
        position: 'fixed'
      }} />
      {open && <div className="">
        <br /><br />
        <ContactModal open={open} setOpen={setOpen} />
      </div>}
    </div>
  );
};

export default Navbar;

/**

 */