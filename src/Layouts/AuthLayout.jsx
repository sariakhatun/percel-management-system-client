import React from "react";
import { Outlet } from "react-router";
import pic from '../assets/authImage.png'
import Profast from "../Shared/Profast/Profast";
const AuthLayout = () => {
  return (
    <div className="bg-base-200 p-12">
        <div>
            <Profast></Profast>
        </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
         <img
          src={pic}
          className="max-w-sm rounded-lg shadow-2xl"
        />
       </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
