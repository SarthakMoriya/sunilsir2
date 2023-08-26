import React from "react";
import { motion } from "framer-motion";
import p1 from "./p1.png";
import p2 from "./p2.png";
import p3 from "./p3.png";
import "./style.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="innerT">
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold "
        >
          <div className="border-b-4 border-b-amber-400 pb-2">Testimonial</div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mt-5 text-3xl"
        >
          <span className=" text-4xl font-extrabold ml-3">
            Satisfied Customers
          </span>
        </motion.div>
        <br />
        <br />

        <div className="rowT">
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            className="colT"
          >
            <div className="testimonial">
              <img src={p1} alt="" />
              <div className="name">Rajveer Singh</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
                I am extremely satisfied with the timely and reliable service
                provided by{" "}
                <span className="golden-text-animation font-bold">
                  Infinity Immigration Consultant
                </span>
                . From document submission to final approval, every step was
                handled promptly and accurately. Your dedication to ensuring a
                seamless immigration experience is highly commendable.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            className="colT"
          >
            <div className="testimonial">
              <img src={p2} alt="" />
              <div className="name">Rakesh Kumar</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
                I want to express my gratitude for the personalized attention I
                received from their team. They took the time to understand my
                unique situation and provided tailored solutions. This approach,
                coupled with their professionalism, made my immigration process
                feel well-guided and stress-free.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            className="colT"
          >
            <div className="testimonial">
              <img src={p3} alt="" />
              <div className="name">Harpreet Singh</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
                <span className="golden-text-animation font-bold">
                  Infinity Immigration Consultant
                </span>{" "}
                stands out for its transparent and consistent communication. I
                greatly appreciate being kept informed about the progress of my
                application at all times. This level of openness and reliability
                made me confident in the service's commitment to my immigration
                success.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            className="colT"
          >
            <div className="testimonial">
              <img src={p3} alt="" />
              <div className="name">Seerat Kaur</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
                I am thoroughly impressed with the efficiency and support I
                received from{" "}
                <span className="golden-text-animation font-bold">
                  Infinity Immigration Consultant
                </span>
                . The team guided me through every step of the process, ensuring
                all my questions were addressed promptly. Thanks to your expert
                assistance, my immigration journey was made remarkably smooth.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            className="colT"
          >
            <div className="testimonial">
              <img src={p3} alt="" />
              <div className="name">shivam Sharma</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
                I am beyond pleased with the expertise demonstrated by{" "}
                <span className="golden-text-animation font-bold">
                  Infinity Immigration Consultant
                </span>
                . The depth of knowledge your team possesses regarding
                immigration procedures and regulations is impressive. This
                expertise reassured me throughout the process, and I am now
                settled in my new country, all thanks to your exceptional
                guidance.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100, duration: 1 }}
            className="colT"
          >
            <div className="testimonial">
              <img src={p3} alt="" />
              <div className="name">Mehak kaur</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
              I want to extend my heartfelt appreciation to  <span className="golden-text-animation font-bold">
                  Infinity Immigration Consultant
                </span> for making my transition to a new country incredibly smooth. The guidance and support your team provided were invaluable. The attention to detail and commitment to ensuring all requirements were met reflect the professionalism that sets your service apart. My sincere thanks for a job well done.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
