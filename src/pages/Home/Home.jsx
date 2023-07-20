import React from "react";
import Crousal from "../../components/Crousal/Crousal";
import { Link } from "react-router-dom";
import Counter from "../../pages/About/Counter/Counter";
import "./Home.css";
import uni1 from "../../assets/universities/uni1.png";
import uni2 from "../../assets/universities/uni2.png";
import uni3 from "../../assets/universities/uni3.png";
import uni4 from "../../assets/universities/uni4.jpg";
import uni5 from "../../assets/universities/uni6a.png";
import uni6 from "../../assets/universities/uni5.png";
import uni7 from "../../assets/universities/uni7.png";
import uni8 from "../../assets/universities/uni6b.png";
import peopleimg from "../../assets/homepeopleimg.jpg";

import homepageimg from "../../assets/homepageimg.jpg";
import Service from "../Services/Service";
import Country from "../Countries/Country";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center ">
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
      </div>
      <br />
      <br />
      <br />
      {/* Study abroad starts */}
      <div className="flex items-center justify-center">
        <div className="flex justify-center">
          <div className="content flex flex-col items-center  border  w-[40%]">
            <div className="font-bold text-primary text-6xl mt-[8rem] mb-5">
              Study Abroad
            </div>
            <div className="text-xl p-6 ">
              Unlock a world of opportunities with Godspeed's global education
              platform. Experience life-changing exposure and growth through
              studying abroad. Our mission is to bring students closer to their
              dreams by offering seamless pathways to international education.
              Embrace boundless horizons, broaden your horizons, and embark on a
              transformative journey that will shape your future. Dare to dream
              big and let Godspeed be your guide to a brighter and more
              promising tomorrow.
            </div>
          </div>
          <div className="image-content">
            <img src={homepageimg} alt="" />
          </div>
        </div>
      </div>
      {/* Study abroad Ends */}
      {/* university pics starts */}
      <br />
      <br />
      <div className="flex items-center justify-around  border-t border-amber-400">
        <div className="">
          <img src={uni1} alt="" />
        </div>
        <div className="">
          <img src={uni2} alt="" />
        </div>
        <div className="">
          <img src={uni3} alt="" />
        </div>
        <div className="">
          <img src={uni4} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-around border border-amber-400 ">
        <div className="">
          <img src={uni5} alt="" />
        </div>
        <div className="">
          <img src={uni6} alt="" />
        </div>
        <div className="">
          <img src={uni7} alt="" />
        </div>
        <div className="">
          <img src={uni8} alt="" />
        </div>
      </div>
      {/* university pics ends */}
      {/* People Imgage starts*/}
      <img
        src={peopleimg}
        alt=""
        className="h-[80vh] w-[100vw] contrast-100 grayscale"
      />
      {/* People Imgage ends*/}
      {/* Counter starts */}
      <br />
      <br />
      <div className="flex items-center justify-center  p-4 ">
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
      </div>
      {/* Counter ends */}
      {/* Select Passion Starts */}
      <br />
      <br />
      <div className=" flex items-center justify-center text-5xl font-extrabold ">
        <div className=" p-2 border-b-4 border-amber-400 mb-8 font-mont font-medium">
          Choose Your{" "}
          <span className="text-amber-400 uppercase font-mont font-medium">
            Field
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 text-center flex-wrap">
        <div className="uppercase text-2xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Science
        </div>
        <div className="uppercase text-2xl font-bold border  p-3 ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Accountancy
        </div>
        <div className="uppercase text-2xl font-bold border  p-3 ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Engineering
        </div>
        <div className="uppercase text-2xl font-bold border  p-3 ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Management
        </div>
      </div>
      <div className="flex items-center justify-center p-4 text-center flex-wrap">
        <div className="uppercase text-2xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Economic
        </div>
        <div className="uppercase text-2xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Biotechnology
        </div>
        <div className="uppercase text-2xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Finance
        </div>
        <div className="uppercase text-2xl font-bold border  p-3  ml-7 flex-1 hover:border-amber-400 hover:animate-pulse hover:text-amber-400 cursor-pointer hover:bg-slate-200 ">
          Social Studies
        </div>
      </div>
    <br /><br /><br />
      {/* Select Passion Ends */}
      <Service/>
      <Country/>
      <Contact/>
      <a href="https://api.whatsapp.com/send?phone=8544875229&text=Hello%20there!">Send Message on WhatsApp</a>

    </div>
  );
};

export default Home;
