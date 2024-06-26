import React from "react";
import Workelement from "./Workelement";
import { GiPlanetCore } from "react-icons/gi";
import { FaPenFancy } from "react-icons/fa";
import { PiHouseLineLight } from "react-icons/pi";
import { SiCoronarenderer } from "react-icons/si";
import img3 from '../assets/img-3.webp'

function Ourwork() {
  return (
    <div className="overflow-x:hidden lg:w-full lg:h-screen w-full h-screen   lg:place-content-center lg:relative overflow-hidden ">
      <div className="rotate-div  w-full h-full lg:w-[120vw] lg:h-[70vh] lg:-rotate-3 lg:absolute top-[10vh] bg-[#C19A5B] flex lg:items-center flex-col lg:flex-row justify-start lg:-left-[1vw]">
        <div className="w-full flex  lg:items-center h-full  relative  lg:rotate-3 lg:mx-10 lg:gap-6 flex flex-col lg:flex-row  ">
          <div className="lg:w-fit w-full  h-full flex flex-col justify-center gap-16">
            <div className="top-div   w-full  flex lg:flex-row  ">
              <Workelement   title={"Design"} description={"Interior design and furniture creation"} icon={<FaPenFancy className="lg:h-[3vw] lg:w-[3vw] w-[22vw]" color="#F6F4F2" />} />
              <h1 className="w-fit text-[#F6F4F2] font-['Felix_Titling'] font-regular lg:text-5xl text-[10vw] ">
                Interior Desginer
              </h1>
            </div>
            <div className="top-div w-full  flex items-center flex-wrap">
              <Workelement size={"30px"} title={"Planing"} description={"Architecture planning  "} icon={<PiHouseLineLight className="lg:h-[3vw] lg:w-[3vw] w-[22vw]" color="#F6F4F2" />} />
              <Workelement size={"30px"} title={"Elevation"} description={"House design 3d elevation"} icon={<SiCoronarenderer  className="lg:h-[3vw] lg:w-[3vw] w-[22vw]" color="#F6F4F2" />} />
              <Workelement size={"30px"} title={"Visualization"} description={"Creating realistic 3D models"} icon={<GiPlanetCore className="lg:h-[3vw] lg:w-[3vw] w-[22vw]" color="#F6F4F2" />} />
            </div>
          </div> 
          <img src={img3} className="lg:-rotate-3 lg:ms-10 h-[80%] "/>
        </div>

        

      </div>
    </div>
  );
}

export default Ourwork;
