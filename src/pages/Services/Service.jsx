import React from "react";
import visa from "../../assets/services/visa.png";
import business from "../../assets/services/briefcase.png";
import globe from "../../assets/services/world.png";
import family from "../../assets/services/multiple-users-silhouette.png";
import home from "../../assets/services/flat.png";
import student from "../../assets/services/graduation.png";
const Service = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
        <div className="border-b-4 border-b-amber-400 pb-2">What we offer</div>
      </div>
      <div className="flex items-center justify-center mt-5 text-3xl">
        <span className=" text-4xl font-extrabold ml-3">Our Best Servies</span>
      </div>
      <br />
      <br />
      <div className="flex  ">
        <div className="flex flex-1 justify-around items-center">
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={visa} alt="" className="w-[100px]" />
              </div>
              <div className=" text-xl mt-4">Migration Visa</div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={globe} alt="" className="w-[100px]" />
              </div>
              <div className=" text-xl mt-4">Tourist Visa</div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={business} alt="" className="w-[100px]" />
              </div>
              <div className=" text-xl mt-4">Business Visa</div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={home} alt="" className="w-[100px]" />
              </div>
              <div className=" text-xl mt-4">Residence Visa</div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={family} alt="" className="w-[100px]" />
              </div>
              <div className=" text-xl mt-4">Family Visa</div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center">
              <div className="border-4 rounded-lg border-slate-500 p-1">
                <img src={student} alt="" className="w-[100px]" />
              </div>
              <div className=" text-xl mt-4">Student Visa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
