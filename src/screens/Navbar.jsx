import React from "react";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="h-[80px]  border-b border-b-[rgba(255,255,255,.2)]  bg-black text-white flex flex-row justify-between items-center px-[200px] ">
      <div className="">
        <img src={Logo} alt="logo" className="h-[30px] w-[30px]" />
      </div>
      <div className="flex flex-row gap-10 list-none text-[rgba(255,255,255,.6)] border border-1 border-[rgba(255,255,255,.2)] rounded-[20px] py-[8px] px-[40px] ">
        <li>Features</li>
        <li>Developers</li>
        <li>Company</li>
        <li>Blog</li>
        <li>Changelog</li>
      </div>
      <div className="border border-1 border-[rgba(255,255,255,.2)] rounded-[20px] py-[2px] px-[10px]">
        <button className="relative px-6 py-3 text-white text-lg font-semibold rounded-[20px] bg-gradient-to-r  from-purple-600 to-purple-500 shadow-lg shadow-purple-900 border border-black transform transition-transform hover:scale-105 focus:outline-none">
          <span className="absolute inset-0 bg-gradient-to-r from-black to-purple-900 rounded-full blur-lg opacity-80"></span>
          <span className="relative">Join waitlist</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
