import React from "react";
import Crousal from "../../components/Crousal/Crousal";
import { Link } from "react-router-dom";
import "./Home.css";

import homepageimg from "../../assets/homepageimg.jpg";
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
      {/* Study abroad starts */}
      <div className="flex">
        <div className="flex">
          <div className="content flex flex-col items-center">
            <div className="">Study Abroad</div>
            <div className="">
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
      <Crousal />
    </div>
  );
};

export default Home;
