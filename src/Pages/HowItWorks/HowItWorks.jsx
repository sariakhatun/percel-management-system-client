// components/HowItWorks.jsx
import React from 'react';
import logo from '../../assets/bookingIcon.png'

const cards = [
  {
    image: logo,
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    image: logo,
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    image: logo,
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    image: logo,
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-20  mb-12 rounded-2xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">How It Works</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <img src={card.image} alt={card.title} className="mx-auto h-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
