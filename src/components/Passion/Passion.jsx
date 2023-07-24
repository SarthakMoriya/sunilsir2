import React from 'react'
import { motion } from "framer-motion"
import './Passion.css'
const Passion = ({name}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" whitespace-nowrap uppercase text-xl font-bold border  p-3 ml-7 flex-1  hover:border-amber-400 hover:text-amber-400 cursor-pointer hover:bg-slate-200 passion-box">
            {name}
        </motion.div>
    )
}

export default Passion