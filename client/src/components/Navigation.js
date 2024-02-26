import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav
      className="w-[50%] mt-16 flex justify-around align-middle
     rounded-lg p-3 text-black
    "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `p-3 w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300 "
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300 hover-effect"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return ` p-3 w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300 hover-effect "
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return ` p-3 w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300 hover-effect "
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
