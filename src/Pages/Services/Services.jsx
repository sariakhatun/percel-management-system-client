// components/Services.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { FaShippingFast, FaGlobeAsia, FaWarehouse, FaHandHoldingUsd, FaBriefcase, FaUndo } from 'react-icons/fa';

const services = [
  {
    icon: FaShippingFast,
    title: "Express & Standard Delivery",
    description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    icon: FaGlobeAsia,
    title: "Nationwide Delivery",
    description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    icon: FaWarehouse,
    title: "Fulfillment Solution",
    description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    icon: FaHandHoldingUsd,
    title: "Cash on Home Delivery",
    description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: FaBriefcase,
    title: "Corporate Service / Contract In Logistics",
    description: "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    icon: FaUndo,
    title: "Parcel Return",
    description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-50 rounded-2xl">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-primary">Our Services</h2>
        <p className="text-gray-600">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service, idx) => (
          <ServiceCard
           service={service}
           key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
