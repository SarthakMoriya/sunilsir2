import React, { useState } from "react";
import CountryCard from "../Cards/CountryCard/CountryCard";

import nz from "../../assets/Country/nz.webp";
import aus from "../../assets/Country/austrailia.webp";
import canada from "../../assets/Country/canada.webp";
import europe from "../../assets/Country/europe.webp";
import london from "../../assets/Country/london.webp";
import usa from "../../assets/Country/usa.webp";

import cngif from "../../assets/Country/canadagif.gif";
import ergif from "../../assets/Country/Europe-Flag.gif";
import ausgif from "../../assets/Country/ausgif.gif";
import nzgif from "../../assets/Country/nzgif.gif";
import usagif from "../../assets/Country/usagif.gif";
import ukgif from "../../assets/Country/ukflag.gif";
import CounterBox from "../../components/Counter/CounterBox";
import Contact from "../../components/Contact/Contact";
import GoToTop from "../../components/GoToTop/GoToTop";
import Whatsapp from "../../components/GoToTop/Whatsapp";
import { motion } from "framer-motion";

const data = [
  {
    img: nz,
    gif: ukgif,
    name: "New Zealand",
  },
  {
    img: aus,
    gif: ausgif,
    name: "Australia",
  },
  {
    img: canada,
    gif: cngif,
    name: "Canada",
  },
  {
    img: nz,
    gif: ukgif,
    name: "New Zealand",
  },
  {
    img: europe,
    gif: ergif,
    name: "Europe",
  },
  {
    img: usa,
    gif: usagif,
    name: "USA",
  },
];

const Crousal = () => {
  const [page, setPage] = useState(1);
  const [pageMobile, setPageMobile] = useState(0);

  return (
    <>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-center mt-10 text-xl text-amber-400 font-bold "
      >
        <div className="border-b-4 border-b-amber-400 pb-2">
          Countries we offer support
        </div>
      </motion.div>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-center mt-5 text-3xl country-heading-2 text-center"
      >
        <span>Immigration & Visa Services {"   "}</span> <br />
        <span className=" text-4xl font-extrabold ml-3">
          Following Countries
        </span>
      </motion.div>
      <br />
      <br />
      <br />
      <div className="hidden sm:flex sm:flex-col">
        {page === 1 && (
          <div className="flex flex-wrap country-card">
            <CountryCard
              cc={canada}
              name={"Canada"}
              gif={cngif}
              className="flex-1 "
            />
            <CountryCard
              cc={usa}
              name={"USA"}
              gif={usagif}
              className="flex-1 "
            />
            <CountryCard
              cc={europe}
              name={"Europe"}
              gif={ergif}
              className="flex-1 "
            />
          </div>
        )}
        {page === 2 && (
          <div className="flex flex-wrap country-card">
            <CountryCard
              cc={nz}
              name={"New Zealand"}
              gif={nzgif}
              className="flex-1 "
            />
            <CountryCard
              cc={aus}
              name={"Australia"}
              gif={ausgif}
              className="flex-1 "
            />
            <CountryCard
              cc={london}
              name={"Australia"}
              gif={ukgif}
              className="flex-1 "
            />
          </div>
        )}
        <div className="flex items-center justify-center">
          <div
            className="mx-2 my-4 font-extrabold text-4xl cursor-pointer bg-slate-300 px-1 py-1"
            onClick={() => setPage((pg) => (pg === 1 ? 2 : 1))}
          >
            {"<"}
          </div>
          <div
            className="mx-2 my-4 font-extrabold text-4xl cursor-pointer bg-slate-300 px-1 py-1"
            onClick={() => setPage((pg) => (pg === 2 ? 1 : 2))}
          >
            {">"}
          </div>
        </div>
      </div>

      {/* MObile VIew */}
      <div className="sm:hidden">
        <div className="flex flex-col">
          {page === 1 && (
            <div className="flex flex-wrap country-card">
              <CountryCard
                cc={data[pageMobile].img}
                name={data[pageMobile].name}
                gif={data[pageMobile].gif}
                className="flex-1 "
              />
            </div>
          )}

          <div className="flex items-center justify-center">
            <div
              className="mx-2 my-4 font-extrabold text-4xl cursor-pointer bg-slate-300 px-1 py-1"
              onClick={() => setPageMobile((pg) => (pg === 0 ? 5 : pg - 1))}
            >
              {"<"}
            </div>
            <div
              className="mx-2 my-4 font-extrabold text-4xl cursor-pointer bg-slate-300 px-1 py-1"
              onClick={() => setPageMobile((pg) => (pg === 5 ? 0 : pg + 1))}
            >
              {">"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crousal;
