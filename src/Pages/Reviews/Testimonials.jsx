import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    quote:
      "A posture corrector works by providing support and gentle alignment...",
    name: "Awlad Hossin",
    designation: "Senior Product Designer",
    image: "https://i.ibb.co/3Zvsk86/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default.jpg",
  },
  {
    quote:
      "Their delivery service is top-notch. My package arrived on time and in perfect condition.",
    name: "Rasel Ahamed",
    designation: "CTO",
   image: "https://i.ibb.co/3Zvsk86/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default.jpg",
  },
  {
    quote: "Very reliable service. Loved the real-time tracking feature.",
    name: "Nasir Uddin",
    designation: "CEO",
    image: "https://i.ibb.co/3Zvsk86/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default.jpg",
  },
  {
    quote:
      "Affordable, efficient, and friendly. A rare combination these days.",
    name: "Fatema Jahan",
    designation: "Fashion Brand Owner",
    image: "https://i.ibb.co/3Zvsk86/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default.jpg",
  },
  {
    quote: "The COD system saved my business hours every week.",
    name: "Tanvir Rahman",
    designation: "Logistics Head",
    image: "https://i.ibb.co/3Zvsk86/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-primary mb-10">
        What Our Customers Say
      </h2>

      <div className="flex items-center justify-center gap-4 overflow-x-hidden">
        {reviews.map((review, index) => {
          const isActive = index === activeIndex;
          const isAdjacent =
            Math.abs(index - activeIndex) === 1 ||
            (activeIndex === 0 && index === reviews.length - 1) ||
            (activeIndex === reviews.length - 1 && index === 0);

          return (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out 
                ${
                  isActive
                    ? "opacity-100 scale-100 z-10"
                    : isAdjacent
                    ? "opacity-40 scale-95"
                    : "opacity-0 scale-90 hidden sm:block"
                }
                max-w-sm w-full`}
            >
              <ReviewCard
                quote={review.quote}
                name={review.name}
                designation={review.designation}
                image={review.image}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="bg-white p-3 rounded-full shadow hover:bg-teal-100 transition"
        >
          <span className="text-xl">←</span>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition
                ${i === activeIndex ? "bg-lime-400" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="bg-lime-400 p-3 rounded-full text-white shadow hover:bg-lime-500 transition"
        >
          <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
