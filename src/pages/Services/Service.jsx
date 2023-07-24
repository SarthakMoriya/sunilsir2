import React, { useEffect } from "react";
import visa from "../../assets/services/visa.png";
import business from "../../assets/services/briefcase.png";
import globe from "../../assets/services/world.png";
import family from "../../assets/services/multiple-users-silhouette.png";
import home from "../../assets/services/flat.png";
import student from "../../assets/services/graduation.png";

import './Service.css'

const Service = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="p-5 border-t border-b border-amber-400 bg-slate-50 ">
      <div className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
        <div className="border-b-4 border-b-amber-400 pb-2">What we offer</div>
      </div>
      <div className="flex items-center justify-center mt-5 text-3xl">
        <span className=" text-4xl font-extrabold ml-3">Our Best Servies</span>
      </div>
      <br />
      <br />
      <div className="flex  ">
        <div className="flex flex-1 justify-around items-center flex-wrap service-box">
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2 service-box-individual">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={visa} alt="" className="w-[100px]" />
              </div>
              <div className=" text-xl mt-4">Migration <span className="text-amber-600  uppercase">Visa</span></div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={globe} alt="" className="w-[100px] p-5" />
              </div>
              <div className=" text-xl mt-4">Tourist <span className="text-amber-600  uppercase">Visa</span></div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={business} alt="" className="w-[100px] p-5" />
              </div>
              <div className=" text-xl mt-4">Business <span className="text-amber-600  uppercase">Visa</span></div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={home} alt="" className="w-[100px] p-5" />
              </div>
              <div className=" text-xl mt-4">Residence <span className="text-amber-600  uppercase">Visa</span></div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={family} alt="" className="w-[100px] p-5" />
              </div>
              <div className=" text-xl mt-4">Family <span className="text-amber-600  uppercase">Visa</span></div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={student} alt="" className="w-[100px] p-5" />
              </div>
              <div className=" text-xl mt-4">Student <span className="text-amber-600  uppercase">Visa</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
