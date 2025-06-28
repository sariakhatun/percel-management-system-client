// components/ReviewCard.jsx
import React from 'react';

const ReviewCard = ({ quote, name, designation, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xs text-sm text-gray-700">
      {/* Quote mark */}
      <div className="text-3xl text-teal-400 mb-3">“</div>

      {/* Quote text */}
      <p className="mb-6 leading-relaxed">
        {quote}
      </p>

      {/* Dashed line */}
      <hr className="border-dashed border-t-2 border-gray-200 mb-4" />

      {/* Avatar + Name + Role */}
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-teal-800">{name}</h4>
          <p className="text-xs text-gray-500">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
