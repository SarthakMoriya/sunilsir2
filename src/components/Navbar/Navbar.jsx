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
            <div className="p-1 flex items-center  upper-navbar-link">
              <img src={mail} alt="" className="mr-2 w-[32px]" />
              <span className="flex ">test1234@gmail.com</span>
            </div>
            <div className="p-1 flex items-center upper-navbar-link">
              <img src={phone} alt="" className="mr-2" />
              <span className="whitespace-nowrap">+91 9876543210</span>
            </div>
          </div>
        </div>
        <div className=" p-1">
          <div className=" upper-navbar-social flex justify-around ">
            <div className="p-1 flex items-center">
              <img src={facebook} alt="" className="mr-2" />
              <span className="hidden sm:inline">Facebook</span>
            </div>
            <div className="p-1 flex items-center">
              <img src={instagram} alt="" className="mr-2" />
              <span className="hidden sm:inline">Instagram</span>
            </div>
            <div className="p-1 flex items-center">
              <img src={whatsapp} alt="" className="mr-2 w-[32px]" />
              <span className="hidden sm:inline">Whatsapp</span>
            </div>
          </div>
        </div>
      </div>
      {/* Upper navbar ends */}
      {/* main Navbar starts */}
      <div className="flex justify-around items-center bg-primary p-2 ">
        <div className=" navbar-company  cursor-pointer">
          {/* <img src={logo} alt="Infinity Immigration Consultant" className="logo"/> */}
          <Link to='/' className="whitespace-nowrap text-2xl uppercase font-bold ">Infinty Immigration Consultant</Link>
        </div>

        <div className=" navbar-links mr-2  cursor-pointer transition-all duration-400 ">
          <Link to='/country' className="whitespace-nowrap  text-md font-bold uppercase  lg:text-slate-800 text-white hover:text-white transition-colors delay-100 ease-in-out">Study Abroad</Link>
        </div>
        <div className=" navbar-links mr-2  uppercase cursor-pointer transition-all duration-400 ">
          <Link
            to="/about"
            className="text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out">
            About
          </Link>
        </div>
        <div className=" navbar-links mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 ">
          <Link to="/about" className="text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out">Services</Link>
        </div>
        <div className=" navbar-links mr-2 text-md font-bold uppercase cursor-pointer transition-all duration-400 ">
          <Link className=" whitespace-nowrap text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out" to='/contact'>Contact Us</Link>
        </div>
        <div className=" navbar-links-booking mr-2 text-md font-medium uppercase cursor-pointer transition-all duration-400  border p-3 rounded-2xl bg-slate-50 hover:bg-slate-300 hover:text-amber-400 whitespace-nowrap"
          onClick={() => { setOpen(!open) }}
        >
          Make An Appointment
        </div>
      </div>
      {open && <div className="">
        <br /><br />
        <ContactModal open={open} setOpen={setOpen} />
      </div>}
      {/* Tablet Navbar */}
      <div className="tablet-navbar flex justify-around items-center bg-primary p-2">
        <div className="mr-2  cursor-pointer transition-all duration-400 ">
          <Link to='/country' className="whitespace-nowrap  text-md font-bold uppercase  lg:text-slate-800 text-white hover:text-white transition-colors delay-100 ease-in-out">Study Abroad</Link>
        </div>
        <div className="mr-2  uppercase cursor-pointer transition-all duration-400 ">
          <Link
            to="/about"
            className="text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out">
            About
          </Link>
        </div>
        <div className="mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 ">
          <Link to="/about" className="text-md font-bold text-slate-800 hover:text-white transition-colors delay-100 ease-in-out">Services</Link>
        </div>
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
    </div>
  );
};

export default Navbar;

/**

 */