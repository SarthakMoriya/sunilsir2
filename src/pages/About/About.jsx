import React, { useEffect } from "react";
import { motion } from "framer-motion"
import "./About.css";
import peopleimg from "../../assets/peopleimage.webp";
import logo from "../../assets/logo.png";
import pp1 from "../../assets/people/pp1.jpg";
import pp2 from "../../assets/people/pp2.jpg";
import pp3 from "../../assets/people/pp3.jpg";
import pp4 from "../../assets/people/pp4.jpg";

import Counter from "../../components/Counter/Counter";
// import Review from "../../components/Reviews/Review";
import Contact from "../../components/Contact/Contact";
import Testimonials from "../../components/testimonial/Testimonials";
import GoToTop from "../../components/GoToTop/GoToTop";
import Whatsapp from "../../components/GoToTop/Whatsapp";


const About = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" bg-slate-100 ">
      <br /><br /><br />
      <br />
      <div className="about-line-break-mobile"><br /><br /></div>
      <div className="about-first-div relative">
        <div className="peopleimg flex items-center ">
          <img src={peopleimg} alt="" className="" />
        </div>
        <div className="bg-primary w-full h-[50vh] opacity-50 absolute top-[0px] flex items-center justify-center about-yellow-cover">
          <br />
          <br />
          <br />
        </div>
        <div className="h-[50vh] w-[100vw] flex-col items-center text-center opacity-100  absolute   font-bold text-slate-100 about-heading">
          <br />
          <br />
          <br />
          <motion.h4
            whileInView={{ y: [100, 0], scale: [0, 1,], opacity: [0, 1] }}
            transition={{ duration: .5 }}
            className="text-2xl uppercase text-black">
            About Infinity Immigration Consultant
          </motion.h4>
          <br />
          <motion.h2
            whileInView={{ y: [100, 0], scale: [0, 1,], opacity: [0, 1] }}
            transition={{ duration: .5 }}
            className="text-4xl uppercase text-black">Trusted Immigration Consultant</motion.h2>
        </div>
      </div>
      <div className="line-break"><br /><br /></div>
      {/* After Image */}
      <motion.div

        className="company-banner-box">
        <div className="inner-box m-3 p-2 shadow-2xl shadow-slate-300">
          <motion.img whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
            transition={{ type: "spring", stiffness: 100 }} src={logo} alt="" loading="lazy" />
          <div className="company-info ">
            <motion.h4
              whileInView={{ y: [100, 0], scale: [0, 1,], opacity: [0, 1] }}
              transition={{ duration: .5 }}
              className="text-3xl text-primaryDark  border-b-4 border-primary golden-text-animation">
              About Us
            </motion.h4>
            <motion.h4
              whileInView={{ y: [100, 0], scale: [0, 1,], opacity: [0, 1] }}
              transition={{ duration: .5 }}
              className="text-2xl uppercase py-2 ">
              Infinity Immigration Consultant
            </motion.h4>
            <motion.h4
              whileInView={{ y: [100, 0], scale: [0, 1,], opacity: [0, 1] }}
              transition={{ duration: .5 }}
              className="text-xl uppercase pb-2">
              Don't just dream, let's make it a reality
            </motion.h4>
            <motion.h4
              whileInView={{ y: [100, 0], scale: [0, 1,], opacity: [0, 1] }}
              transition={{ duration: .5 }}
              className="text-lg paragraph-text">
              "Embrace the truth: You are not confined to any fixed place. Your
              essence transcends boundaries. You belong to the entire world, yet
              to no single place. Embrace this boundless belonging and step into
              your role. We stand ready, united in this shared adventure."
            </motion.h4>
          </div>
        </div>
      </motion.div>
      <br /><br /><br /><br />
      {/* Mission Box starts */}
      <div className="mission-box">
        <div className="mission-inner-box shadow-2xl  border-primaryDark rounded shadow-slate-300 border-2">
          <div className="mission-content-box shadow-2xl rounded overflow-auto">
            <h3 className="text-xl text-black p-2 border border-b-black">
              Mission Statements
            </h3>
            <h2 className="text-2xl text-red-600 font-semibold p-2 ">
              Building Bridges: Empowering Your Immigration Journey
            </h2>
            <div className="p-3 font-medium">
              At{" "}
              <span className="font-semibold underline">
                Infinity Immigration Consultant
              </span>
              <span className="mission-content-box-paragraph">
                , our mission is to guide you on your immigration journey,
                providing unwavering support and expertise every step of the way.
                Our dedicated team understands the complexities of the immigration
                process and is committed to simplifying it for you. With our
                transparent and ethical approach, we strive to empower individuals
                and families, helping them realize their dreams of a better future
                in a welcoming and inclusive environment. Trust us to be your
                reliable partner as we navigate this transformative journey
                together.
              </span>

            </div>
          </div>
        </div>
      </div>
      {/* Mission Box Ends */}
      <br /><br /><br />
      {/* Team Members starts */}
      <motion.div
        whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
        <div className="border-b-4 border-b-amber-400 pb-2 ">
          Expert Team Members
        </div>
      </motion.div>
      <motion.div
        whileInView={{ scale: [0, 1,], opacity: [0, 1] }}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex items-center justify-center mt-5 text-3xl team-members">
        <span>Our team at {"   "}</span>{" "}
        <span className=" text-4xl font-extrabold ml-3">Your Service</span>
      </motion.div>

      {/* <div className="team-box p-3">
        <div className="team-box p-3 flex-wrap">
          <div className="tablet-team">

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="team-boxes  flex justify-center items-center p-2  ">
              <div className=" flex flex-col w-full h-full items-center justify-center p-3 shadow-2xl  border-primary border-x-4 rounded-xl">
                <img src={pp1} alt="" loading="lazy" />
                <div className="name font-medium text-amber-400 mt-2">
                  John Wick
                </div>
                <div className="job-position font-bold text-zinc-700 mx-3 whitespace-nowrap">
                  Founder & Managing Partner
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="team-boxes  flex justify-center items-center p-2  ">
              <div className=" flex flex-col w-full h-full items-center justify-center p-3 shadow-2xl  border-primary border-x-4 rounded-xl">
                <img src={pp2} alt="" loading="lazy" />
                <motion.div
                  initial={{ filter: 'blur(10px)' }} // Initial blur effect
                  animate={{ filter: 'blur(0)' }} // Target blur value (no blur)
                  transition={{ duration: 1 }} // Animation duration
                  className="name font-medium text-amber-400 mt-2">
                  John Wick
                </motion.div>
                <div className="job-position font-bold text-zinc-700 mx-3 whitespace-nowrap">
                  Founder & Managing Partner
                </div>
              </div>
            </motion.div>
          </div>
          <div className="tablet-team">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="team-boxes  flex justify-center items-center p-2  ">
              <div className=" flex flex-col w-full h-full items-center justify-center p-3 shadow-2xl  border-primary border-x-4 rounded-xl">
                <img src={pp3} alt="" loading="lazy" />
                <div className="name font-medium text-amber-400 mt-2">
                  John Wick
                </div>
                <div className="job-position font-bold text-zinc-700 mx-3 whitespace-nowrap">
                  Founder & Managing Partner
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="team-boxes  flex justify-center items-center p-2  ">
              <div className=" flex flex-col w-full h-full items-center justify-center p-3 shadow-2xl  border-primary border-x-4 rounded-xl">
                <img src={pp4} alt="" loading="lazy" />
                <div className="name font-medium text-amber-400 mt-2">
                  John Wick
                </div>
                <div className="job-position font-bold text-zinc-700 mx-3 whitespace-nowrap">
                  Founder & Managing Partner
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div> */}

      {/* Team Members Ends */}
      {/* Counter Starts */}
      <br /><br /><br />
      <Counter border={"amber-400"} />
      <br /><br /><br />
      {/* Counter ends */}
      {/* Review Starts */}
      {/* <Review /> */}
      <div className="">
        <Testimonials />
      </div>
      <br /><br /><br />

      {/* Review Ends */}
      <Contact />
      <br /><br /><br />
      <div className="flex items-center justify-between up-arrow">
        <GoToTop />
        {/* <Whatsapp /> */}
      </div>
    </div>
  );
};

export default About;

/**
 *       <div className="flex items-center ">
        <div className="flex items-center justify-around w-full">
          <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl p-3">
            <div class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="tania andrew"
                class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
              />
              <div class="flex w-full flex-col gap-0.5">
                <div class="flex items-center justify-between">
                  <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tania Andrew
                  </h5>
                  <div class="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                  Canada
                </p>
              </div>
            </div>
            <div class="mb-6 p-0">
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Immigration Care Consultancy is definitely a highly recommended
                canadian an migration agency. A big applause & very grateful to
                Mr.Sunil for assistance.
              </p>
            </div>
          </div>
          <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl p-3">
            <div class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="tania andrew"
                class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
              />
              <div class="flex w-full flex-col gap-0.5">
                <div class="flex items-center justify-between">
                  <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tania Andrew
                  </h5>
                  <div class="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                  Australia
                </p>
              </div>
            </div>
            <div class="mb-6 p-0">
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Immigration Care Consultancy is definitely a highly recommended
                canadian an migration agency. A big applause & very grateful to
                Mr.Sunil for assistance.
              </p>
            </div>
          </div>
          <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl p-3">
            <div class="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                alt="tania andrew"
                class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
              />
              <div class="flex w-full flex-col gap-0.5">
                <div class="flex items-center justify-between">
                  <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Tania Andrew
                  </h5>
                  <div class="5 flex items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p class="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                  Russia
                </p>
              </div>
            </div>
            <div class="mb-6 p-0">
              <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Immigration Care Consultancy is definitely a highly recommended
                canadian an migration agency. A big applause & very grateful to
                Mr.Jatin for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
 */