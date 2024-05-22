// import "./App.css";
import React from "react";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
      <nav className="w-screen">
        <div className="h-24 bg-[rgb(167,215,197)] flex items-center justify-evenly absolute ml-12 max-sm:ml-0 max-sm:z-10">
          <img src={logo} className="w-[80px] h-[80px] p-2 text-[#509995] " alt="" />
        </div>

        <ul className="h-12 w-11/12 bg-[#e2ede8] flex items-center justify-evenly mt-7 ml-32 absolute max-sm:ml-[53px]">
          <li ><a href="#" className="hover:bg-[#c0dad5] p-[11px] ease-in-out duration-300   "> HOME</a>
          </li>
          <li ><a href="#instructor"  className="hover:bg-[#c0dad5] p-[11px] ease-in-out duration-300">ABOUT US</a></li>
          <li ><a href="#pricing" className="hover:bg-[#c0dad5] p-[11px] ease-in-out duration-300" > SERVICES</a></li>
          <li ><a href="#update" className="hover:bg-[#c0dad5] p-[11px] ease-in-out duration-300"> CONTACT US</a></li>
        </ul>
      </nav>
  );
}

export default Navbar;
