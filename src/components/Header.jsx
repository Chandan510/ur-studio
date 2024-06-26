import React from "react";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div className="relative bg-transparent overflow-hidden ">
      <div className="w-full  flex justify-between px-5 lg:px-16 py-[3vw] ">
        <div className='heading text-2xl font-["Montserrat"] font-regular w-1/2 '>
          <button>
            <span className="font-regular">Ur</span>{" "}
            <span className="font-semibold">Studio</span>
          </button>
        </div>
        <div className='lists flex  w-1/2 justify-between font-["Montserrat"]  text-sm   font-semibold text-[#424141] invisible lg:visible'>
          <Link className="cursor-pointer" to="frontpage"   >HOME</Link>
          <Link className="cursor-pointer" to="ourwork"   >WORK</Link>
          <Link className="cursor-pointer" to="services"  >SEVICES</Link>
          <Link className="cursor-pointer" to="contact"   >CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
