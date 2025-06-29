import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import Profast from "../Profast/Profast";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  let { logOut, user } = useAuth();
  let handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/coverage">Track Order</NavLink>
      </li>
     
      <li>
        <NavLink to="/sendParcel">Send A Parcel</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Profast></Profast>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link onClick={handleLogOut} className="btn bg-[#CAEB66]">
            Logout
          </Link>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn bg-[#CAEB66]">
              Sign In
            </Link>
            <Link to="/register" className="btn bg-[#CAEB66]">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
