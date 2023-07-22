import React, { useEffect } from "react";
import Contact from "../../components/Contact/Contact";
import "./ContactUs.css";
import peopleimg from "../../assets/peopleimage.jpg";
import GoogleMap from "../../components/GoogleMap/Googlemap";
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
      <div className="peopleimg flex items-center ">
        <img src={peopleimg} alt="" className="" />
      </div>
      <div className="bg-amber-200 w-full h-[60vh] opacity-50 absolute top-0 flex items-center justify-center">
        <br />
        <br />
        <br />
      </div>
      <div className="flex-col items-center text-center opacity-100  absolute top-20 left-[24rem]  text-slate-100">
        <br />
        <br />
        <br />
        <h4 className="text-2xl uppercase font-md text-salte-200">
          Get in touch with us
        </h4>
        <br />
        <h2 className="text-5xl uppercase  text-black">You've come to <span className="text-slate-200 font-bold">right place</span></h2>
      </div>
      <br /><br />
      <div className="flex flex-col items-center justify-center ">
        <Contact />
      </div>
      <br /><br /><br /><br />
      <div className="mt-4 mb-4 shadow-xl">
      <GoogleMap/>
      </div>
    </div>
  );
};

export default ContactUs;
