import React from "react";
import video from "../assets/video_render_3.mp4";

function VideoWork() {
  return (
    <div className="lg:w-full lg:h-fit flex flex-col w-full h-fit mt-[10vh] bg-zinc-300 mt-[20vh] overflow-hidden lg:mb-[20vh] ">
      <video className="w-full" src={video} autoPlay loop muted />
      <div className="video_footer w-full h-[70vh] bg-zinc-900 flex justify-center ">
        <div className="flex justify-center items-start mt-20 aligns-center  p-5  text-white font-['Basis_Grotesque_Pro'] w-full lg:w-7/12 h-fit gap-8 lg:gap-10 lg:flex-row flex-col">
          <h1 className="text-2xl lg:w-[40vw] lg:text-end font-regular tracking-none ">DISCOVER YOUR <br/> NEW SPACE IN 3D</h1>
          <div className="lg:w-[60vw] lg:px-5 ">
            <p className="text-lg text-start lg:tracking-wider lg:w-[30vw]">
              Keeping up with the latest technologies, we bring concepts to life
              by creating <span className="text-[#C19A5B] ">realistic 3D visualizations</span>  . This tangible, living
              experience of your future space helps ensure that the project
              vision is fully understood and ready to implement.
            </p>
            <button className="w-fit px-14 py-5 bg-[#C19A5B] text-white mt-14 text-lg ">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoWork;
