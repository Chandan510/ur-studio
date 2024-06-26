import React from "react";



function Workelement({title, description, icon}) {
  return (
    <div className="flex lg:w-[15vw] gap-5 w-[40vw]  items-center p-2">
      {icon}
      <div className=' text-[#F6F4F2] font-["Montserrat"]'>
        <h1 className="font-regular lg:text-[1vw] text-[3vw] ">{title}</h1>
        <h1 className="font-semibold lg:text-[1vw] text-[4vw] leading-tight">
          {description}
        </h1>
      </div>
    </div>
  );
}

export default Workelement;
