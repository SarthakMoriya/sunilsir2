import React, { useEffect } from "react";
import { motion } from "framer-motion";
import visa from "../../assets/services/visa.webp";
import business from "../../assets/services/briefcase.webp";
import globe from "../../assets/services/world.webp";
import family from "../../assets/services/multiple-users-silhouette.webp";
import home from "../../assets/services/flat.webp";
import student from "../../assets/services/graduation.webp";

import "./Service.css";

const Service = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      whileInView={{ y: [130, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="p-5 border-t border-b border-amber-400 bg-slate-50 "
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold "
      >
        <div className="border-b-4 border-b-amber-400 pb-2 text-center golden-text-animation">
          What we offer
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="flex items-center justify-center mt-5 text-3xl"
      >
        <span className=" text-4xl font-extrabold ml-3 text-center">
          Our Best Servies
        </span>
      </motion.div>
      <br />
      <br />
      <motion.div
        whileInView={{ y: [200, 0] }}
        transition={{ duration: 1 }}
        className="flex  "
      >
        <div className="flex flex-1 justify-around items-center flex-wrap service-box">
          <div className="flex-1  whitespace-normal ">
            <div className="flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2 service-box-individual">
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border-4 rounded-lg border-slate-500 p-1"
              >
                <img src={visa} alt="" className="w-[100px]" />
              </motion.div>
              <div className=" text-xl mt-4">
                Migration{" "}
                <span className="text-amber-600  uppercase golden-text-animation">
                  Visa
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className=" service-box-individual flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border-4 rounded-lg border-slate-500 p-1"
              >
                <img src={globe} alt="" className="w-[100px] p-5" />
              </motion.div>
              <div className=" text-xl mt-4">
                Tourist{" "}
                <span className="text-amber-600  uppercase golden-text-animation">
                  Visa
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="service-box-individual flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border-4 rounded-lg border-slate-500 p-1"
              >
                <img src={business} alt="" className="w-[100px] p-5" />
              </motion.div>
              <div className=" text-xl mt-4">
                Business{" "}
                <span className="text-amber-600  uppercase golden-text-animation">
                  Visa
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="service-box-individual flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border-4 rounded-lg border-slate-500 p-1"
              >
                <img src={home} alt="" className="w-[100px] p-5" />
              </motion.div>
              <div className=" text-xl mt-4">
                Residence{" "}
                <span className="text-amber-600  uppercase golden-text-animation">
                  Visa
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="service-box-individual flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border-4 rounded-lg border-slate-500 p-1"
              >
                <img src={family} alt="" className="w-[100px] p-5" />
              </motion.div>
              <div className=" text-xl mt-4">
                Family{" "}
                <span className="text-amber-600  uppercase golden-text-animation">
                  Visa
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1  whitespace-normal ">
            <div className="service-box-individual flex flex-col items-center justify-center hover:shadow-xl rounded-lg transition-all ease-in delay-100 p-2">
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border-4 rounded-lg border-slate-500 p-1"
              >
                <img src={student} alt="" className="w-[100px] p-5" />
              </motion.div>
              <div className=" text-xl mt-4">
                Student{" "}
                <span className="text-amber-600  uppercase golden-text-animation">
                  Visa
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
