import React, { useState } from "react";
import { motion } from "framer-motion";
import marker from "../../assets/contactform/maps-and-flags.png";
import phone from "../../assets/contactform/telephone-call.png";
import mail from "../../assets/contactform/email.png";
import "./Contact.css";
const Contact = () => {
  const [state, setstate] = useState({});
  const handleStateChange = (e) => {
    setstate((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleMessage = () => {
    console.log(state);
    const message = `Name:${state.name} \n Email:${state.email} \n Message: ${state.message} Phone:${state.number} \n`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/88441484?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <motion.div
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center"
    >
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="container relative"
      >
        <div className="content">
          <div className="left-side">
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ type: "spring", stiffness: 100 }}
              className="address details flex flex-col items-center justify-center"
            >
              <img src={marker} className="" alt="" />
              <div className="topic">Address</div>
              <div className="text-one">SCO - 38, 2nd floor</div>
              <div className="text-two">Sector-30,Chandigarh</div>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ type: "spring", stiffness: 100 }}
              className="phone details flex flex-col items-center justify-center"
            >
              <img src={phone} alt="" />
              <div className="topic">Phone</div>
              <div className="text-one">+91 9988444184</div>
              <div className="text-two">+91 9988444184</div>
            </motion.div>
            <motion.div
              whileInView={{ scale: [0, 1], opacity: [0, 1] }}
              transition={{ type: "spring", stiffness: 100 }}
              className="email details flex flex-col items-center justify-center"
            >
              <img src={mail} className="" alt="" />
              <div className="topic">Email</div>
              <div className="text-one">
                support@infinityiic.in
              </div>
              <div className="text-two">
                infinity.filingimmigration@gmail.com
              </div>
            </motion.div>
          </div>
          <div className="right-side">
            <div className="topic-text golden-text-animation">
              Send us a message
            </div>
            <p>
              If you have any work from me , you can send me message from here.
              It's my pleasure to help you.
            </p>
            <form action="#">
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="input-box"
              >
                <input
                  name="name"
                  onChange={(e) => {
                    handleStateChange(e);
                  }}
                  className="caret-amber-400 border-2 focus:border-amber-400"
                  type="text"
                  placeholder="Enter your name..."
                />
              </motion.div>
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="input-box"
              >
                <input
                  name="number"
                  onChange={(e) => {
                    handleStateChange(e);
                  }}
                  className="caret-amber-400 border-2 focus:border-amber-400"
                  type="text"
                  placeholder="Enter your number..."
                />
              </motion.div>
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="input-box"
              >
                <input
                  name="email"
                  onChange={(e) => {
                    handleStateChange(e);
                  }}
                  className="caret-amber-400 border-2 focus:border-amber-400"
                  type="text"
                  placeholder="Enter your email..."
                />
              </motion.div>
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="input-box message-box"
              >
                <textarea
                  name="message"
                  onChange={(e) => {
                    handleStateChange(e);
                  }}
                  className="caret-amber-400 border-2 focus:border-amber-400"
                  type="text"
                  placeholder="Enter your message..."
                />
              </motion.div>
              <motion.div
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ type: "spring", stiffness: 100 }}
                className="button border bg-amber-400   hover:border-t-black hover:border-b-black hover:animate-pulse"
              >
                <input
                  className="caret-amber-400 border-2 focus:border-amber-400"
                  type="button"
                  value="Send Now"
                  onClick={handleMessage}
                />
              </motion.div>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
