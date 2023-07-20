import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import phone from "../../assets/phone-call.png";
import mail from "../../assets/email.png";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex-col border border-black-500 w-full fixed z-10">
      {/* Upper Navbar */}
      <div className="flex bg-neutral-200   w-full justify-around">
        <div className="   ">
          <div className="flex justify-around w-full p-1 ">
            <div className="p-1 flex items-center">
              <img src={mail} alt="" className="mr-2" />
              <span className="flex ">test1234@gmail.com</span>
            </div>
            <div className="p-1 flex items-center">
              <img src={phone} alt="" className="mr-2" />
              <span>+91 9876543210</span>
            </div>
          </div>
        </div>
        <div className=" p-1">
          <div className="flex justify-around ">
            <div className="p-1 flex items-center">
              <img src={facebook} alt="" className="mr-2" />
              <span>Facebook</span>
            </div>
            <div className="p-1 flex items-center">
              <img src={instagram} alt="" className="mr-2" />
              <span>Instagram</span>
            </div>
            <div className="p-1 flex items-center">
              <img src={whatsapp} alt="" className="mr-2" />
              <span>Whatsapp</span>
            </div>
          </div>
        </div>
      </div>
      {/* Upper navbar ends */}
      {/* main Navbar starts */}
      <div className="flex justify-around items-center bg-primary">
        <div className="text-2xl uppercase cursor-pointer">
          {/* <img src={logo} alt="Infinity Immigration Consultant" className="logo"/> */}
          <Link to='/'>Infinty Immigration Consultant</Link>
        </div>

        <div className="mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 hover:text-primary">
          Study Abroad
        </div>
        <div className="mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 hover:text-primary">
          Immigrate To
        </div>
        <div className="mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 hover:text-primary">
          <Link to="/about">About</Link>
        </div>
        <div className="mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 hover:text-primary">
          Services
        </div>
        <div className="mr-2 text-1xl font-bold uppercase cursor-pointer transition-all duration-400 hover:text-primary">
          Contact Us
        </div>
      </div>
      {/* main Navbar ends */}
    </div>
  );
};

export default Navbar;
