import React from "react";
import { motion } from "framer-motion"
import marker from "../../assets/contactform/maps-and-flags.png";
import phone from "../../assets/contactform/telephone-call.png";
import mail from "../../assets/contactform/email.png";
import "./Contact.css";
const Contact = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5, }}
      className="flex items-center justify-center">
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, }}
        className="container relative">
        <div className="content">
          <div className="left-side">
            <motion.div
              whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
              transition={{ type: "spring", stiffness: 100 }}
              className="address details flex flex-col items-center justify-center">
              <img src={marker} classNameName="" />
              <div className="topic">Address</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
              transition={{ type: "spring", stiffness: 100 }}
              className="phone details flex flex-col items-center justify-center">
              <img src={phone} />
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
              transition={{ type: "spring", stiffness: 100 }}
              className="email details flex flex-col items-center justify-center">
              <img src={mail} classNameName="" />
              <div className="topic">Email</div>
              <div className="text-one">codinglab@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </motion.div>
          </div>
          <div className="right-side">
            <div className="topic-text text-amber-400">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form action="#">
              <motion.div
                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="input-box">
                <input className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your name" />
              </motion.div>
              <motion.div
                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="input-box">
                <input className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your number" />
              </motion.div>
              <motion.div
                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="input-box">
                <input className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your email" />
              </motion.div>
              <motion.div
                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="input-box message-box">
                <textarea className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your email" />
              </motion.div>
              <motion.div
                whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="button border bg-amber-400   hover:border-t-black hover:border-b-black hover:animate-pulse">
                <input className="caret-amber-400 border-2 focus:border-amber-400" type="button" value="Send Now" />
              </motion.div>
            </form>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
