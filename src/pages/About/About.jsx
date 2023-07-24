import React, { useEffect } from "react";
import "./About.css";
import peopleimg from "../../assets/peopleimage.jpg";
import logo from "../../assets/logo.png";
import pp1 from "../../assets/pp1.jpg";

import Counter from "../../components/Counter/Counter";
import Review from "../../components/Reviews/Review";


const About = () => {
  useEffect(() => {
    // Scroll to the top of the page on page load
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative bg-slate-100 ">
      <br />
      <br />
      <br />
      <div className="peopleimg flex items-center ">
        <img src={peopleimg} alt="" className="" />
      </div>
      <div className="bg-primary w-full h-[60vh] opacity-50 absolute top-0 flex items-center justify-center">
        <br />
        <br />
        <br />
      </div>
      <div className="flex-col items-center text-center opacity-100  absolute top-20 left-[24rem] font-bold text-slate-100">
        <br />
        <br />
        <br />
        <h4 className="text-2xl uppercase ">
          About Infinity Immigration Consultant
        </h4>
        <br />
        <h2 className="text-5xl uppercase ">Trusted Immigration Consultant</h2>
      </div>
      <br />
      <br />
      {/* After Image */}
      <div className="company-banner-box">
        <div className="inner-box m-3 p-2 shadow-2xl shadow-slate-300">
          <img src={logo} alt="" />
          <div className="company-info ">
            <h4 className="text-3xl text-primaryDark  border-b-4 border-primary">
              About Us
            </h4>
            <h4 className="text-2xl uppercase py-2">
              Infinity Immigration Consultant
            </h4>
            <h4 className="text-xl uppercase pb-2">
              Don't just dream, let's make it a reality
            </h4>
            <h4 className="text-lg">
              "Embrace the truth: You are not confined to any fixed place. Your
              essence transcends boundaries. You belong to the entire world, yet
              to no single place. Embrace this boundless belonging and step into
              your role. We stand ready, united in this shared adventure."
            </h4>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
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
              , our mission is to guide you on your immigration journey,
              providing unwavering support and expertise every step of the way.
              Our dedicated team understands the complexities of the immigration
              process and is committed to simplifying it for you. With our
              transparent and ethical approach, we strive to empower individuals
              and families, helping them realize their dreams of a better future
              in a welcoming and inclusive environment. Trust us to be your
              reliable partner as we navigate this transformative journey
              together.
            </div>
          </div>
        </div>
      </div>
      {/* Mission Box Ends */}
      <br />
      <br />
      <br />
      {/* Team Members starts */}
      <div className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
        <div className="border-b-4 border-b-amber-400 pb-2">
          Expert Team Members
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 text-3xl">
        <span>Our team at {"   "}</span>{" "}
        <span className=" text-4xl font-extrabold ml-3">Your Service</span>
      </div>

      <div className="team-box p-3">
        <div className="team-box p-3 ">
          <div className="team-boxes  flex justify-center items-center p-2  ">
            <div className=" flex flex-col w-full h-full items-center justify-center p-3 shadow-2xl  border-primary border-x-4 rounded-xl">
              <img src={pp1} alt="" />
              <div className="name font-medium text-amber-400 mt-2">
                John Wick
              </div>
              <div className="job-position font-bold text-zinc-700 mx-3">
                Founder & Managing Partner
              </div>
            </div>
          </div>
          <div className="team-boxes  flex justify-center items-center p-2  ">
            <div className=" flex flex-col w-full h-full items-center justify-center p-3 shadow-2xl  border-primary border-x-4 rounded-xl">
              <img src={pp1} alt="" />
              <div className="name font-medium text-amber-400 mt-2">
                John Wick
              </div>
              <div className="job-position font-bold text-zinc-700 mx-3">
                Founder & Managing Partner
              </div>
            </div>
          </div>
          <div className="team-boxes  flex justify-center items-center p-2  ">
            <div className=" flex flex-col w-full h-full items-center justify-center p-3 shadow-2xl  border-primary border-x-4 rounded-xl">
              <img src={pp1} alt="" />
              <div className="name font-medium text-amber-400 mt-2">
                John Wick
              </div>
              <div className="job-position font-bold text-zinc-700 mx-3">
                Founder & Managing Partner
              </div>
            </div>
          </div>
          <div className="team-boxes  flex justify-center items-center p-2  ">
            <div className=" flex flex-col w-full h-full items-center justify-center p-3 shadow-2xl  border-primary border-x-4 rounded-xl">
              <img src={pp1} alt="" />
              <div className="name font-medium text-amber-400 mt-2">
                John Wick
              </div>
              <div className="job-position font-bold text-zinc-700 mx-3">
                Founder & Managing Partner
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Ends */}
      {/* Counter Starts */}
      <br />
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center  p-4 ">
        <div className="flex justify-between w-[80%]  p-4  border-b-4 border-t-4 border-amber-400">
          <div className="flex flex-col text-6xl ">
            <div className="flex justify-center items-center text-amber-400 ">
              <Counter end={23} />+
            </div>
            <div className="text-2xl font-bold mt-4">Visa Categories</div>
          </div>
          <div className="flex flex-col text-6xl">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={30} />+
            </div>
            <div className="text-2xl font-bold mt-4">Team Members</div>
          </div>
          <div className="flex flex-col text-6xl">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={331} />+
            </div>
            <div className="text-2xl font-bold mt-4">Visa Process</div>
          </div>
          <div className="flex flex-col text-6xl">
            <div className="flex justify-center items-center text-amber-400">
              <Counter end={100} />%
            </div>
            <div className="text-2xl font-bold mt-4">Success Rate</div>
          </div>
        </div>
      </div>
      {/* Counter ends */}
      {/* Review Starts */}
      <br />
      <br />
      <br />
      <br />
      <Review/>
      {/* Review Ends */}
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