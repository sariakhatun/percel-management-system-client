// components/ClientSlider.jsx
import React from "react";
import amazon from '../../assets/brands/amazon.png';
import amazonVector from '../../assets/brands/amazon_vector.png';
import casio from '../../assets/brands/casio.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import startPeople from '../../assets/brands/start-people 1.png';
import start from '../../assets/brands/start.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const clientLogos = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  startPeople,
  start,
];


const ClientSlider = () => {
  return (
    <section className="py-12 overflow-hidden  border-b-2 border-base-400 border-dashed pb-8 mb-12 border-b-gray-500">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-extrabold text-[#03373D]">We've helped thousands of sales teams</h2>
        
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="animate-slide flex gap-10 w-max">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="mx-24 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
