import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { motion } from "framer-motion"

const CounterBox = ({ end }) => {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      {counter && <CountUp start={0} end={end} duration={2} delay={0} />}
    </ScrollTrigger>
  );
};



const Counter = ({border}) => {
  return (
    <motion.div
      className="flex items-center justify-center  p-4 counter-container">
      <div className="flex justify-between w-[80%]  p-4  border-b-4 border-t-4 border-slate-200 counter-inner-box">
        <div className="flex flex-col text-6xl  counter-box">
          <div className="flex justify-center items-center text-amber-400 ">
            <CounterBox end={23} />+
          </div>
          <div className="text-2xl font-bold mt-4">Visa Categories</div>
        </div>
        <div className="flex flex-col text-6xl counter-box">
          <div className="flex justify-center items-center text-amber-400">
            <CounterBox end={30} />+
          </div>
          <div className="text-2xl font-bold mt-4">Team Members</div>
        </div>
        <div className="flex flex-col text-6xl counter-box">
          <div className="flex justify-center items-center text-amber-400">
            <CounterBox end={331} />+
          </div>
          <div className="text-2xl font-bold mt-4">Visa Process</div>
        </div>
        <div className="flex flex-col text-6xl counter-box">
          <div className="flex justify-center items-center text-amber-400">
            <CounterBox end={99} />%
          </div>
          <div className="text-2xl font-bold mt-4">Success Rate</div>
        </div>
      </div>
    </motion.div>
  )
}
export default Counter;