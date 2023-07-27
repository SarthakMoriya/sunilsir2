import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import './Country.css'
import peopleimg from "../../assets/peopleimage.jpg";
import flag from '../../assets/flags.webp'
import globe from '../../assets/globe.png'
import CountryCard from '../../components/Cards/CountryCard/CountryCard';

import nz from '../../assets/Country/nz.jpg'
import aus from '../../assets/Country/austrailia.webp'
import canada from '../../assets/Country/canada.jpg'
import europe from '../../assets/Country/europe.jpg'
import london from '../../assets/Country/london.jpg'
import usa from '../../assets/Country/usa.jpg'

import cngif from '../../assets/Country/canadagif.gif'
import ergif from '../../assets/Country/Europe-Flag.gif'
import ausgif from '../../assets/Country/ausgif.gif'
import nzgif from '../../assets/Country/nzgif.gif'
import usagif from '../../assets/Country/usagif.gif'
import ukgif from '../../assets/Country/ukflag.gif'
import CounterBox from '../../components/Counter/CounterBox';
import Contact from '../../components/Contact/Contact';

const Country = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="country-line-break"><br /><br /><br /></div>
      <div className="country-line-break-xxl"></div>
      <div className="relative border">
        <div className="peopleimgdesh flex items-center ">
          <img src={peopleimg} alt="" className="" loading="lazy" />
        </div>
        <div className="bg-primary w-full h-[50vh] opacity-40 absolute top-0 flex items-center justify-center yellow-cover">
          <br />
          <br />
          <br />
        </div>
        <div className="h-[50vh] w-[100vw] text-center flex-col items-center  opacity-100  absolute   text-slate-100 country-heading">
          <br />
          <br />
          <br />
          <h4 className="text-2xl uppercase font-medium">
            Countries
          </h4>
          <br />
          <h2 className="text-5xl  font-medium text-center">Visa For Any Global Destination</h2>
        </div>
      </div>
      <br />
      <br />
      <div className="country-line-break"><br /><br /></div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br />

      <div className="flex items-center justify-center ml-10 mr-10 shadow-2xl p-3 country-main-box">
        <div className="flex ml-10 mr-10 border">
          <div className="image flex-1 p-3 shadow-xl rounded-lg ">

            <motion.img
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }} src={flag} alt="" />
          </div>
          <div className="flag-content flex-1 country-flag-box">
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
              <div className="border-b-4 border-b-amber-400 pb-2">
                Countries we offer
              </div>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center justify-center mt-5 text-3xl">
              <span className=" text-4xl font-light ml-3 country-content-subhead text-center">Visa for <span className='capitalize text-4xl font-semibold whitespace-nowrap'>any Country</span> </span>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center justify-center mt-5 text-center">
              <span className=" p-3 font-light ml-3"> <span className='font-light text-amber-400 ml-0 p-0 text-lg'>"</span> Embark on international journeys with our  comprehensive <br /> visa services, covering multiple countries." </span>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center justify-center mt-5 ">
              <img className=" p-3 font-light ml-3 w-[100px]" src={globe} alt='globe' />
              <div className="flex justify-center items-center text-lg font-medium cc-counter-text">
                <CounterBox end={15} />+ Countries Served
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="p-4"><hr /></div>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
        <div className="border-b-4 border-b-amber-400 pb-2">
          Countries we offer support
        </div>
      </motion.div>
      <motion.div
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center justify-center mt-5 text-3xl country-heading-2 text-center">
        <span>Immigration & Visa Services {"   "}</span>{" "} <br />
        <span className=" text-4xl font-extrabold ml-3">Following Countries</span>
      </motion.div>
      <br /><br /><br />
      <div className="flex flex-wrap country-card">
        <CountryCard cc={canada} name={"Canada"} gif={cngif} className="flex-1 " />
        <CountryCard cc={usa} name={"USA"} gif={usagif} className="flex-1 " />
        <CountryCard cc={europe} name={"Europe"} gif={ergif} className="flex-1 " />
      </div>
      <br /><br />
      <div className="flex flex-wrap country-card">
        <CountryCard cc={nz} name={"New Zealand"} gif={nzgif} className="flex-1 mt-2 " />
        <CountryCard cc={london} name={"London"} gif={ukgif} className="flex-1 mt-2 " />
        <CountryCard cc={aus} name={"Australia"} gif={ausgif} className="flex-1 mt-2 " />
      </div>
      <br /><br /><br />
      <div className="m-5 p-6"><hr /></div>
      <Contact />
      <div className="m-5 p-6"><hr /></div>

    </div>
  )
}

export default Country