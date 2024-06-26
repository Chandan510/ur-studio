import React from "react";

function NextProject() {
  return (
    <div className="lg:w-full lg:h-fit min-h-screen h-fit w-screen pt-[10vh]  lg:pt-[10vh] lg:pb-[20vh]  overflow-hidden">


      <h1 className=' w-full text-center font-["Basis_Grotesque_Pro"] text-zinc-800 font-bold tracking-[.3em] sm:text-center  lg:mb-10 lg:text-xs text-xs'>
        CONTACT
      </h1>

      <div className="h-full lg:mt-20 mt-10">
        <h1 className="font-['Salina-Trial'] text-center lg:text-8xl text-5xl text-zinc-800 italic font-light">
          What is{" "}
          <span className="not-italic text-[#C19A5B] lg:text-[10vw] ms-2">
            YOUR
          </span>{" "}
          <br /> next{" "}
          <span className="not-italic text-[#C19A5B] lg:text-[10vw] ms-2">
            Project ?
          </span>{" "}
        </h1>

        <div className="w-full h-fit lg:p-10 mt-[10vh] lg:px-0 px-3 lg:mt-10 flex flex-col lg:flex-row lg:justify-center  items-center  gap-10 font-['Montserrat']">
          <p className="lg:text-end font-sm">
            Every great design begins with a dialogue. <br />
            Share your vision with us.
          </p>
          <div className="flex flex-col gap-6">
            <button className="w-fit lg:px-10 px-5 py-3 lg:py-5 bg-[#C19A5B] text-white  text-start lg:text-lg ">
              Call: +91-9489****45
            </button>
            <button className="w-fit lg:px-10 px-5 py-3 lg:py-5 bg-[#C19A5B] text-white text-start lg:text-lg ">
              E-mail: Chandansuthar510@gmail.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NextProject;
