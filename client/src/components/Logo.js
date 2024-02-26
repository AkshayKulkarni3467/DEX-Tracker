import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between">
      <div>
        <Link
          to="/"
          className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-cyan flex items-center
     "
        >
          <img src={logoSvg} alt="CryptoBucks" />
          <span className="text-black">CryptoBucks</span>
        </Link>
      </div>
      <div className="mt-5 flex bg-gray-800 p-5 rounded-xl cursor-pointer shadow-2xl">
        <Link to={"/dashboard"}>
          <button>Visit Portfolio</button>
        </Link>
      </div>
      <div className="mt-5 flex bg-gray-800 p-5 rounded-xl cursor-pointer shadow-2xl ml-10">
        <Link to={"/anamolies"}>
          <button
            onClick={() => {
              navigate("/anamolies");
            }}
          >
            Check Anamolies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
