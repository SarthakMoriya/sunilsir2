import React from "react";
import marker from "../../assets/contactform/maps-and-flags.png";
import phone from "../../assets/contactform/telephone-call.png";
import mail from "../../assets/contactform/email.png";
import "./ContactModal.css";
const ContactMOdal = ({ open,setOpen }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="container relative modal-container top-[-85px]">
                <div className="content">
                    <div className="left-side">
                        <div className="address details flex flex-col items-center justify-center">
                            <img src={marker} classNameName="" />
                            <div className="topic">Address</div>
                            <div className="text-one">Surkhet, NP12</div>
                            <div className="text-two">Birendranagar 06</div>
                        </div>
                        <div className="phone details flex flex-col items-center justify-center">
                            <img src={phone} />
                            <div className="topic">Phone</div>
                            <div className="text-one">+0098 9893 5647</div>
                            <div className="text-two">+0096 3434 5678</div>
                        </div>
                        <div className="email details flex flex-col items-center justify-center">
                            <img src={mail} classNameName="" />
                            <div className="topic">Email</div>
                            <div className="text-one">codinglab@gmail.com</div>
                            <div className="text-two">info.codinglab@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text text-amber-400">Send us a message</div>
                        <p className="tablet-text-fake">
                            If you have any work from me or any types of quries related to my
                            tutorial, you can send me message from here. It's my pleasure to
                            help you.
                        </p>
                        <form action="#">
                            <div className="input-box">
                                <input className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your name" />
                            </div>
                            <div className="input-box">
                                <input className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your number" />
                            </div>
                            <div className="input-box">
                                <input className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your email" />
                            </div>
                            <div className="input-box message-box">
                                <textarea className="caret-amber-400 border-2 focus:border-amber-400" type="text" placeholder="Enter your email" />
                            </div>
                            <div className="button border bg-amber-400   hover:border-t-black hover:border-b-black hover:animate-pulse">
                                <input className="caret-amber-400 border-2 focus:border-amber-400" type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                    <div className=" close-btn absolute top-[20px] text-xl bg-amber-400 p-3 rounded-[50%] text-white hover:text-black hover:bg-white transition-all ease-in delay-100 hover:border-4 cursor-pointer"
                        onClick={() => { setOpen(!open) }}
                    >
                        X
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMOdal;
