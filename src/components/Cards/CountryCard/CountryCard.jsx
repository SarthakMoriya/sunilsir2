import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Country-Card.css";


const CountryCard = ({ cc, name, gif }) => {
  return (
    <div
      whileInView={{ scale: [0, 1], opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="max-w-2xl mx-auto m-2 cc"
    >
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 h-full">
        <Link href="#">
          <img
            className="rounded-t-lg h-40 w-full object-cover"
            src={cc}
            alt=""
          />
        </Link>
        <div className="flex items-center justify-center">
          <img
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 500,
            }}
            src={gif}
            alt=""
            className="w-[112px] h-[84px] object-contain mb-3 "
          />
        </div>
        <div className="p-2 sm:pl-5 sm:pr-5 sm:pt-3 sm:pb-2">
          <Link href="#">
            <h5 className=" text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white text-center sm:text-left">
              {name}
            </h5>
          </Link>
          <div className="font-normal text-gray-700 mb-3 dark:text-gray-400 flex justify-center  text-sm ">
            <div className="rounded-lg   pl-2 cc-text">#studentvisa</div>
            <div className="rounded-lg  pl-2 cc-text">#touristvisa</div>
            <div className="rounded-lg  pl-1 cc-text">#businessvisa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
