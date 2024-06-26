import React from "react";

function Footer() {
  return (
    <div className="lg:w-full lg:h-screen min-h-screen w-full h-fit  bg-zinc-800 lg:sticky lg:bottom-0 ">
      {/* Parent div full height and width */}
      <div className="w-full h-full px-[8vw] flex flex-col justify-center gap-20">
        {/* Child 1 */}
        <div className="font-['Basis_Grotesque_Pro'] text-center mt-[10vh] lg:mt-0 ">
          <h1 className="text-6xl text-white font-regular">
            Ur <span className="font-semibold">Studio</span>
          </h1>
          <h1 className="text-md mt-3 text-white font-regular uppercase">
            Designer | 3D Visualizer | CG artist
          </h1>
        </div>
        {/* Child 2 */}
        <div className='pt-5 lg:pt-20 flex flex-col lg:flex-row  justify-center aligns-center   text-white font-["Basis_Grotesque_Pro"] gap-[10vw]'>
         
          <div className="services text-white ">
            <h1 className="font-semibold text-lg mb-5 text-zinc-200">
              Services
            </h1>
            <ul className="text-zinc-500 font-semibold  leading-7">
              <li>Walkthrough</li>
              <li>3D model</li>
              <li>Animations</li>
              <li>Visualization</li>
              <li>Elevation</li>
              <li>CG artist</li>
              <li>Architecture Planning</li>
            </ul>
          </div>
          <div className="contact  lg:w-[30vw] text-zinc-500 font-semibold  leading-7">
            <h1 className="font-semibold text-lg mb-5 text-zinc-200">
              Contact
            </h1>
            <h2>Mobile: +91-9429****45</h2>
            <h2>Email: chandansuthar510@gmail.com</h2>
            <h2 className="mt-2 leading-6">
              Address: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eaque repellat odit fuga?
            </h2>
          </div>
        <h1 className="mb-10 lg:mb-0 uppercase font-['Basis_Grotesque_Pro'] text-[8vw] lg:text-[3.5vw] font-light  tracking-wide leading-none">Your<span className="italic text-[#C19A5B]">Dream</span>,<br/>Our<span className="text-[#C19A5B] italic">Expertise</span></h1>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
