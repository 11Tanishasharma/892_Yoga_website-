import React from "react";
import Shape from "../assets/images/Shape.png";
import yoga from "../assets/images/yoga.png";

function Landing() {
  return (
    <div className=" bg-[#F1F9F4] flex justify-evenly items-center h-screen max-sm:flex-col max-sm:h-[900px] ">
      <div className="relative  w-11/12 max-sm:w-96 max-sm:mt-40 max-sm:1/2">
        <img src={Shape} alt="" className="h-[500px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  max-sm:h-96"/>
        <img
          src={yoga}
          alt=""
          className="h-80 w-80 border-2 border-solid rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-sm:h-60 max-sm:w-60"
        />
      </div>
      <div className="flex flex-col justify-evenly items-center h-80 max-sm:pt-28 max-sm:gap-2">
        <h1 className="text-[#509995] text-7xl font-bold text-center ">
          YOGA CLASS 
        </h1>
        <p className="text-lg font-bold text-[#509995] text-center font-mono w-8/12  max-sm:text-sm max-sm:w-11/12 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit hic
          suscipitenim quaerat ratione corporis quo quidem mollitia,
          autem aperiam non ex rerum nesciunt repellendus expedita veritatis,
          eligendi dolorum culpa!
        </p> <br />
        <a href="#">
        <button className="text-white text-lg bg-[#509995] px-9 py-2 rounded-full hover:scale-105 ease-in-out duration-300 ">
          Join Now
        </button></a>
       
      </div>
      <img src={Shape} alt="" className="absolute bottom-[-330px] right-[-330px] max-sm:hidden"/>
    </div>
  );
}

export default Landing;
