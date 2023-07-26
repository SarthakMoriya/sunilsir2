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
      <div className="contact-line-break"><br /><br /><br /></div>
      <div className="contact-container relative">

        <div className="peopleimgc flex items-center ">
          <img src={peopleimg} alt="" className="" loading="lazy"/>
        </div>
        <div className="bg-amber-400 w-full h-[50vh] opacity-50 absolute top-0 flex items-center justify-center contact-yellow-cover">
          <br />
          <br />
          <br />
        </div>
        <div className="flex-col items-center text-center opacity-100  absolute   text-slate-100 contact-content top-[6rem]
    left-[16rem]">
          <h4 className="text-2xl uppercase font-md text-slate-200">
            Get in touch with us
          </h4>
          <br />
          <h2 className="text-5xl uppercase  text-black">You've come to <span className="text-slate-200 font-bold">right place</span></h2>
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
    </div>
  );
};

export default ContactUs;
