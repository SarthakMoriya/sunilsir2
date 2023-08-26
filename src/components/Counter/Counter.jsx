import React from "react";
import { motion } from "framer-motion"
import CounterBox from "./CounterBox";


const Counter = ({ border }) => {
  return (
    <motion.div
      whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
      transition={{ duration: .2, ease: "easeInOut" }}
      className="flex items-center justify-center  p-4 counter-container">
      <div className="flex justify-between w-[80%]  p-4  border-b-4 border-t-4 border-slate-200 counter-inner-box">
        <motion.div
          whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
          transition={{ type: "spring", stiffness: 100, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col text-6xl  counter-box">
          <div className="flex justify-center items-center text-amber-400  golden-text-animation">
            <CounterBox end={23} />+
          </div>
          <div className="text-2xl font-bold mt-4">Visa Categories</div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
          transition={{ type: "spring", stiffness: 100, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col text-6xl counter-box">
          <div className="flex justify-center items-center text-amber-400 golden-text-animation">
            <CounterBox end={30} />+
          </div>
          <div className="text-2xl font-bold mt-4">Team Members</div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
          transition={{ type: "spring", stiffness: 100, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col text-6xl counter-box">
          <div className="flex justify-center items-center text-amber-400 golden-text-animation">
            <CounterBox end={331} />+
          </div>
          <div className="text-2xl font-bold mt-4">Visa Process</div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
          transition={{ type: "spring", stiffness: 100, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col text-6xl counter-box">
          <div className="flex justify-center items-center text-amber-400 golden-text-animation">
            <CounterBox end={99} />%
          </div>
          <div className="text-2xl font-bold mt-4">Success Rate</div>
        </motion.div>
      </div>
    </motion.div>
  )
}
export default Counter;