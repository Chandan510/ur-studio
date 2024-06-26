import React from "react";
import img from "../assets/frontimg.webp";

const Frontpage = () => {
  return (
    <div className="overflow-x:hidden lg:w-full, lg:h-fit lg:pb-20 w-full h-[80vh]  flex  justify-end items-start lg:px-16 relative no-scrollbar overflow-y-scroll overflow-hidden ">
      <div className=" absolute top-5 start-16 z-50 invisible lg:visible">
        <h1 className=" text-3xl md:text-5xl lg:text-[4.4vw] pb-2 font-['Basis_Grotesque_Pro'] bg-white w-fit px-5 font-bold text-[#C19A5B]  ">
          <span>DESIGN &</span>
        </h1>
        <h1 className="uppercase font-['Basis_Grotesque_Pro'] bg-white pt-16 pb-5  px-4 font-bold text-[#C19A5B]  text-3xl md:text-5xl lg:text-[4.4vw] line font-bold ">
          TURNKEY INTERIOR
        </h1>
        <h3 className="tracking-widest font-['Basis_Grotesque_Pro'] bg-[#C19A5B] w-fit px-5 py-2 font-medium text-[#fff]  text-sm md:text-sm lg:text-lg ">
          IN THE DESIGNING FIELD
        </h3>
        <h3 className="tracking-widest font-['Basis_Grotesque_Pro'] bg-[#C19A5B] w-fit px-5 py-2 font-medium text-[#fff]  text-sm md:text-sm lg:text-lg ">
          FROM 2018
        </h3>
      </div>

      <div className="absolute visible lg:invisible w-[80vw] h-[30vh] z-50  top-1/2 left-5 transform -translate-y-1/2 ">
        <div className="[text-shadow:_0_1px_0_rgb(0_0_0_/_60%)] drop-shadow-2xl leading-none">
        <h1 className=" text-[10vw]  md:text-5xl lg:text-[4.4vw]  font-['Basis_Grotesque_Pro']  w-fit px-5 font-bold text-white  ">
          <span>DESIGN &</span>
        </h1>
        <h1 className="font-['Basis_Grotesque_Pro'] text-shadow-lg drop-shadow-lg pt-16 pb-5  px-4 font-bold text-white  text-[10vw] md:text-5xl lg:text-[4.4vw] line font-bold ">
          TURNKEY RENOVATIONS
        </h1>
        <h3 className="tracking-widest font-['Basis_Grotesque_Pro'] drop-shadow-lg bg-[#C19A5B] w-fit px-5 py-2 font-medium text-white  text-sm md:text-sm lg:text-lg ">
          IN THE MONTREAL AREA
        </h3>
        <h3 className="tracking-widest font-['Basis_Grotesque_Pro'] bg-[#C19A5B] w-fit px-5 py-2 font-medium text-white  text-sm md:text-sm lg:text-lg ">
          FROM 2015
        </h3>
        </div>
      </div>

      <div className=" lg:w-[80vw] lg:h-[60vh] w-screen h-full flex justify-center items-center  lg:ml-20  relative  ">
        <div className=" w-full h-full flex justify-center items-center overflow-hidden  ">
          <img
            className="lg:object-contain lg:object-bottom object-bottom  w-full h-full object-cover lg:w-fit lg:h-fit "
            alt="Header"
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
