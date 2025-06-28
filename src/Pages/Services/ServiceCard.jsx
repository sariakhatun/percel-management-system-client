// components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ service}) => {
    let {title,description,icon:Icon}=service
  return (
    <div className="bg-white shadow-lg  p-6 text-center hover:shadow-xl transition duration-300 ease-in-out hover:bg-[#CAEB66] rounded-2xl">
      <div className="text-4xl text-primary mb-4 mx-auto flex justify-center">
        <Icon />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
