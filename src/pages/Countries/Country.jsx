import React from 'react'
import './Country.css'
import peopleimg from "../../assets/peopleimage.jpg";
import flag from '../../assets/flags.webp'
import globe from '../../assets/globe.png'
import Counter from '../../components/Counter/Counter';
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

const Country = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="peopleimg flex items-center ">
        <img src={peopleimg} alt="" className="" />
      </div>
      <div className="bg-primary w-full h-[60vh] opacity-40 absolute top-0 flex items-center justify-center">
        <br />
        <br />
        <br />
      </div>
      <div className="flex-col items-center text-center opacity-100  absolute top-20 left-[24rem]  text-slate-100">
        <br />
        <br />
        <br />
        <h4 className="text-2xl uppercase font-medium">
          Countries
        </h4>
        <br />
        <h2 className="text-5xl  font-medium ">Visa For Any Global Destination</h2>
      </div>
      <br />
      <br />
      <div className="flex items-center justify-center ml-10 mr-10 shadow-2xl p-3">
        <div className="flex ml-10 mr-10 border">
          <div className="image flex-1 p-3 shadow-xl rounded-lg ">
            <img src={flag} alt="" />
          </div>
          <div className="flag-content flex-1">
            <div className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
              <div className="border-b-4 border-b-amber-400 pb-2">
                Countries we offer
              </div>
            </div>
            <div className="flex items-center justify-center mt-5 text-3xl">
              <span className=" text-4xl font-light ml-3">Visa for <span className='capitalize text-4xl font-semibold'>any Country</span> </span>
            </div>
            <div className="flex items-center justify-center mt-5 ">
              <span className=" p-3 font-light ml-3"> <span className='font-light text-amber-400 ml-0 p-0 text-lg'>"</span> Embark on international journeys with our  comprehensive <br /> visa services, covering multiple countries." </span>
            </div>
            <div className="flex items-center justify-center mt-5 ">
              <img className=" p-3 font-light ml-3 w-[100px]" src={globe} alt='globe' />
              <div className="flex justify-center items-center text-lg font-medium ">
                <Counter end={10} />+ Countries Served
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className="p-4"><hr /></div>
      <div className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
        <div className="border-b-4 border-b-amber-400 pb-2">
          Countries we offer support
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 text-3xl">
        <span>Immigration & Visa Services {"   "}</span>{" "} <br />
        <span className=" text-4xl font-extrabold ml-3">Following Countries</span>
      </div>
      <br /><br /><br />
      <div className="flex flex-wrap">
        <CountryCard cc={canada} name={"Canada"} gif={cngif} className="flex-1" />
        <CountryCard cc={usa} name={"USA"} gif={usagif} className="flex-1" />
        <CountryCard cc={europe} name={"Europe"} gif={ergif} className="flex-1" />
      </div>
      <br /><br />
      <div className="flex flex-wrap">
        <CountryCard cc={nz} name={"New Zealand"} gif={nzgif} className="flex-1 mt-2" />
        <CountryCard cc={london} name={"London"} gif={ukgif} className="flex-1 mt-2" />
        <CountryCard cc={aus} name={"Australia"} gif={ausgif} className="flex-1 mt-2" />
      </div>
      <br /><br /><br />
      <div className="p-4"><hr /></div>
    </div>
  )
}

export default Country