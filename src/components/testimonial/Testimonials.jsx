import React from 'react'
import { motion } from "framer-motion"
import p1 from './p1.png'
import p2 from './p2.png'
import p3 from './p3.png'
import './style.css'

const Testimonials = () => {
    return (
        <div class="testimonials">
            <div class="innerT">
                <motion.div
                    whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                    transition={{ duration: .5 }}
                    className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
                    <div className="border-b-4 border-b-amber-400 pb-2">Testimonial</div>
                </motion.div>
                <motion.div
                    whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                    transition={{ duration: .5 }}
                    className="flex items-center justify-center mt-5 text-3xl">
                    <span className=" text-4xl font-extrabold ml-3">
                        Satisfied Customers
                    </span>
                </motion.div>
                <br />
                <br />

                <div class="rowT">
                    <motion.div
                        whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                        transition={{ type: "spring", stiffness: 100, duration: 1 }}
                        class="colT">
                        <div class="testimonial">
                            <img src={p1} alt="" />
                            <div class="name">Full name</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                        transition={{ type: "spring", stiffness: 100, duration: 1 }}
                        class="colT">
                        <div class="testimonial">
                            <img src={p2} alt="" />
                            <div class="name">Full name</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                        transition={{ type: "spring", stiffness: 100, duration: 1 }}
                        class="colT">
                        <div class="testimonial">
                            <img src={p3} alt="" />
                            <div class="name">Full name</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                        transition={{ type: "spring", stiffness: 100, duration: 1 }}
                        class="colT">
                        <div class="testimonial">
                            <img src={p3} alt="" />
                            <div class="name">Full name</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                        transition={{ type: "spring", stiffness: 100, duration: 1 }}
                        class="colT">
                        <div class="testimonial">
                            <img src={p3} alt="" />
                            <div class="name">Full name</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
                        transition={{ type: "spring", stiffness: 100, duration: 1 }}
                        class="colT">
                        <div class="testimonial">
                            <img src={p3} alt="" />
                            <div class="name">Full name</div>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials