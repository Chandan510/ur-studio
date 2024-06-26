import React from "react";
import img1 from '../assets/img-1.webp'
import img2 from '../assets/img-2.webp'

function About() {
  return (
    <div className="lg:w-full lg:h-screen w-full h-fit overflow-x:hidden no-scrollbar overflow-y-scroll overflow-hidden">
      <div className="inner-container lg:px-10 flex w-full pt-[10vh] lg:pt-0 h-fit lg:flex-row flex-col-reverse  ">
        {/* Text container */}
        <div className="text-container px-5 my-10 flex-grow lg:w-1/2 lg:flex lg:flex-col sm:flex  lg:px-28 lg:pt-32 lg:flex-row">
          <h1 className="uppercase font-['Basis_Grotesque_Pro'] text-[8vw] lg:text-[3.5vw] font-light  tracking-wide leading-none">Your<span className="italic text-[#C19A5B]">Dream</span>,<br/>Our<span className="text-[#C19A5B] italic">Expertise</span></h1>
          <p className="mt-7 font-['Montserrat'] tracking-wider text-[3vw] lg:text-[1.12vw] leading-8 ">We offer a complete experience in <span className="italic text-[#C19A5B] font-semibold">Interior Design</span> and Turnkey <span className="italic text-[#C19A5B] font-semibold">Renovations in the Montreal</span>  region , managing each step of the process, from design to completion, to build harmonious and functional interiors.</p>
          <button className="w-fit px-12 py-5 bg-[#C19A5B] text-white mt-14 lg:text-lg">Tell us about your project </button>
        </div>
        {/* Image container */}
        <div className="image-container lg:h-screen lg:w-1/2 relative  lg:flex  h-[40vh] lg:p-0 p-10 ">
          <img className="lg:w-[70%]  absolute w-[65%] top-5 right-5   lg:right-12 lg:top-12" src={img1} />
          <img className="lg:w-[50%]  absolute w-[40%] bottom-5 left-5  lg:left-12 lg:bottom-20" src={img2} />
        </div>
      </div>      
    </div>
  );
}

export default About;
