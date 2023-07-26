import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Review.css";

import pp1 from "../../assets/Profile/p1.jpg";
import pp2 from "../../assets/Profile/p2.jpg";
import pp3 from "../../assets/Profile/p3.jpg";
import pp4 from "../../assets/Profile/p4.jpg";
import pp5 from "../../assets/Profile/p2.jpg";
import pp6 from "../../assets/Profile/p6.jpg";
const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="carousal bg-slate-50 review-box-main">
      <div className="flex items-center justify-center mt-5 text-xl text-amber-400 font-bold ">
        <div className="border-b-4 border-b-amber-400 pb-2">Testimonial</div>
      </div>
      <div className="flex items-center justify-center mt-5 text-3xl">
        <span className=" text-4xl font-extrabold ml-3">
          Satisfied Customers
        </span>
      </div>
      <br />
      <br />
      <Slider {...settings}>
        <div className="review-box flex flex-col box1 items-start justify-around border border-amber-400 rounded-lg shadow-xl">
          <div className="flex-1 user-info flex p-3">
            <img src={pp1} alt="user" className="rounded-full w-[30%]" />
            <div className="country flex items-center justify-center text-2xl font-medium">
              India
            </div>
          </div>
          <div className="flex-1 review flex items-center justify-center">
            <span className="text-xl font-bold pt-3 pb-3 mb-2 text-amber-400 bg-slate-100 p-2">
              Highly Recommended
            </span>
          </div>
          <div className="flex-1 review-desc bg-slate-100 p-2 overflow-hidden">
            <span className="p-3 mb-2 overflow-wrap break-word">
              "I had an incredible experience with the immigration services
              provided by Infinity Immigration Consultant. The team was highly
              professional and guided me through the entire process with ease.
              Thanks to them, I got my visa smoothly, and I can't thank them
              enough for their support!"
            </span>
          </div>
          <br />
        </div>
        <div className="review-box  flex flex-col box1 items-start justify-around border border-amber-400 rounded-lg shadow-xl">
          <div className=" flex-1 user-info flex p-3 ">
            <img src={pp2} alt="user" className=" rounded-full w-[30%]" />
            <div className="country flex items-center justify-center text-2xl font-medium ">
              India
            </div>
          </div>
          <div className=" flex-1 review flex items-center justify-center ">
            <span className=" text-xl font-bold pt-3 pb-3 mb-2  text-amber-400 bg-slate-100 p-2">
              Highly Recommended
            </span>
          </div>
          <div className=" flex-1 review-desc bg-slate-100 p-2 ">
            <span className="p-3  mb-2">
              "I highly recommend Infinity Immigration Consultant! The staff was
              extremely helpful and answered all my questions promptly. They
              made the complex visa application process feel simple and
              stress-free. I'm so grateful for their assistance."
            </span>
          </div>
          <br />
        </div>
        <div className="review-box  flex flex-col box1 items-start justify-around border border-amber-400 rounded-lg shadow-xl">
          <div className=" flex-1 user-info flex p-3 ">
            <img src={pp3} alt="user" className=" rounded-full w-[30%]" />
            <div className="country flex items-center justify-center text-2xl font-medium ">
              India
            </div>
          </div>
          <div className=" flex-1 review flex items-center justify-center ">
            <span className=" text-xl font-bold pt-3 pb-3 mb-2  text-amber-400 bg-slate-100 p-2">
              Smooth & Efficient
            </span>
          </div>
          <div className=" flex-1 review-desc bg-slate-100 p-2 ">
            <span className="p-3  mb-2">
              "Outstanding service! The team at Infinity Immigration Consultant
              was attentive, knowledgeable, and efficient. They went above and
              beyond to help me with my visa application. I couldn't be happier
              with the results. Thank you for making my dream of studying abroad
              come true!"
            </span>
          </div>
          <br />
        </div>
        <div className="review-box  flex flex-col box1 items-start justify-around border border-amber-400 rounded-lg shadow-xl">
          <div className=" flex-1 user-info flex p-3 ">
            <img src={pp4} alt="user" className=" rounded-full w-[30%]" />
            <div className="country flex items-center justify-center text-2xl font-medium ">
              India
            </div>
          </div>
          <div className=" flex-1 review flex items-center justify-center ">
            <span className=" text-xl font-bold pt-3 pb-3 mb-2  text-amber-400 bg-slate-100 p-2">
              Excellent Support
            </span>
          </div>
          <div className=" flex-1 review-desc bg-slate-100 p-2 ">
            <span className="p-3  mb-2">
              "I can't say enough good things about Infinity Immigration
              Consultant. They provided top-notch assistance throughout my visa
              application process. Their expertise and attention to detail made
              the entire journey hassle-free. I'll definitely be recommending
              their services to my friends and family."
            </span>
          </div>
          <br />
        </div>
        <div className="review-box  flex flex-col box1 items-start justify-around border border-amber-400 rounded-lg shadow-xl">
          <div className=" flex-1 user-info flex p-3 ">
            <img src={pp5} alt="user" className=" rounded-full w-[30%]" />
            <div className="country flex items-center justify-center text-2xl font-medium ">
              India
            </div>
          </div>
          <div className=" flex-1 review flex items-center justify-center ">
            <span className=" text-xl font-bold pt-3 pb-3 mb-2  text-amber-400 bg-slate-100 p-2">
              Outstanding Guidance
            </span>
          </div>
          <div className=" flex-1 review-desc bg-slate-100 p-2 ">
            <span className="p-3  mb-2">
              "I had a fantastic experience with Infinity Immigration
              COnsultant. From the start, they provided personalized attention
              and ensured that all my documents were in order. Their expertise
              and friendly approach gave me confidence throughout the visa
              application process. Highly recommended!"
            </span>
          </div>
          <br />
        </div>
        <div className="review-box  flex flex-col box1 items-start justify-around border border-amber-400 rounded-lg shadow-xl">
          <div className=" flex-1 user-info flex p-3 ">
            <img src={pp6} alt="user" className=" rounded-full w-[30%]" />
            <div className="country flex items-center justify-center text-2xl font-medium ">
              India
            </div>
          </div>
          <div className=" flex-1 review flex items-center justify-center ">
            <span className=" text-xl font-bold pt-3 pb-3 mb-2  text-amber-400 bg-slate-100 p-2">
              Highly Recommended
            </span>
          </div>
          <div className=" flex-1 review-desc bg-slate-100 p-2 ">
            <span className="p-3  mb-2">
              "I'm so glad I found Infinity Immigration COnsultant! Their team
              was incredibly supportive, guiding me through the intricate visa
              process step by step. Their dedication and professionalism made
              the difference, and I can't thank them enough for helping me
              reunite with my family."
            </span>
          </div>
          <br />
        </div>
      </Slider>
    </div>
  );
};

export default Review;
/**
               "I'm so glad I found Infinity Immigration COnsultant! Their team
              was incredibly supportive, guiding me through the intricate visa
              process step by step. Their dedication and professionalism made
              the difference, and I can't thank them enough for helping me
              reunite with my family."

                            "I had a fantastic experience with Infinity Immigration
              COnsultant. From the start, they provided personalized attention
              and ensured that all my documents were in order. Their expertise
              and friendly approach gave me confidence throughout the visa
              application process. Highly recommended!"

                            "I can't say enough good things about Infinity Immigration
              Consultant. They provided top-notch assistance throughout my visa
              application process. Their expertise and attention to detail made
              the entire journey hassle-free. I'll definitely be recommending
              their services to my friends and family."

                            "Outstanding service! The team at Infinity Immigration Consultant
              was attentive, knowledgeable, and efficient. They went above and
              beyond to help me with my visa application. I couldn't be happier
              with the results. Thank you for making my dream of studying abroad
              come true!"

                            "I highly recommend Infinity Immigration Consultant! The staff was
              extremely helpful and answered all my questions promptly. They
              made the complex visa application process feel simple and
              stress-free. I'm so grateful for their assistance."
 */
