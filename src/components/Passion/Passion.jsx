import React from 'react'
import { motion } from "framer-motion"
import './Passion.css'
const Passion = ({ name }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.9 }}
            className="
             whitespace-nowrap uppercase text-xl font-bold border p-3  flex-1  cursor-pointer  passion-box w-[100%] hover:border-amber-400 hover:text-amber-400 hover:bg-slate-200 transition-all delay-100 ease-linear	hover:ml-[3px]">
            {name}
        </motion.div>
    )
}

export default Passion
// hover:border-amber-400 hover:text-amber-400 hover:bg-slate-200