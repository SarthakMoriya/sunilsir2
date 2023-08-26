import React, { useState } from "react";
import { motion } from "framer-motion"

import marker from "../../assets/contactform/maps-and-flags.png";
import phone from "../../assets/contactform/telephone-call.png";
import mail from "../../assets/contactform/email.png";
import "./ContactModal.css";
const ContactMOdal = ({ open, setOpen }) => {
    const [state, setstate] = useState({})
    const handleStateChange = (e) => {
        setstate((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const handleSendMessage = () => {
        const message = `Name:${state.name} \n Email:${state.email} \n Message: ${state.message} Phone:${state.number} \n`
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/8544875229?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }
    return (
        <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, }}
            className="flex items-center justify-center">
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, }}
                className="container relative modal-container top-[-85px]">
                <div className="content">
                    <div className="left-sidecm">
                        <motion.div
                            whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="address details flex flex-col items-center justify-center">
                            <img src={marker} className="" alt='' />
                            <div className="topic">Address</div>
                            <div className="text-one">Amritsar,Punjab</div>
                            <div className="text-two">Batala Road , 143001</div>
                        </motion.div>
                        <motion.div
                            whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="phone details flex flex-col items-center justify-center">
                            <img src={phone} alt='' />
                            <div className="topic">Phone</div>
                            <div className="text-one">+91 8544875229</div>
                            <div className="text-two">+91 8544875229</div>
                        </motion.div>
                        <motion.div
                            whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="email details flex flex-col items-center justify-center">
                            <img src={mail} className="" alt='' />
                            <div className="topic">Email</div>
                            <div className="text-one">sarthak8544@gmail.com</div>
                            <div className="text-two">moriyasarthak@gmail.com</div>
                        </motion.div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text text-amber-400">Send us a message</div>
                        <p className="tablet-text-fake">
                            If you have any work from me  you can send me message from here. It's my pleasure to
                            help you.
                        </p>
                        <form action="#">
                            <motion.div
                                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="input-box">
                                <input onChange={(e) => { handleStateChange(e) }} name='name' className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your name" />
                            </motion.div>
                            <motion.div
                                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="input-box">
                                <input onChange={(e) => { handleStateChange(e) }} name='number' className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your number" />
                            </motion.div>
                            <motion.div
                                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="input-box">
                                <input onChange={(e) => { handleStateChange(e) }} name='email' className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your email" />
                            </motion.div>
                            <motion.div
                                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="input-box message-box">
                                <textarea onChange={(e) => { handleStateChange(e) }} name='message' className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your email" />
                            </motion.div>
                            <motion.div
                                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="button border bg-amber-400   hover:border-t-black hover:border-b-black hover:animate-pulse">
                                <input onClick={handleSendMessage} className="caret-amber-400 border-2 focus:border-amber-400" type="button" value="Send Now" />
                            </motion.div>
                        </form>
                    </div>
                    <div className=" close-btn absolute top-[20px] text-xl bg-amber-400 p-3 rounded-[50%] text-white hover:text-black hover:bg-white transition-all ease-in delay-100 hover:border-4 cursor-pointer"
                        onClick={() => { setOpen(!open) }}
                    >
                        X
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactMOdal;
