import React from 'react'


function Workcard({title, img}) {
  return (
    <div className='lg:w-[15vw] lg:h-full flex flex-col lg:rounded-[20px] overflow-hidden lg:-rotate-3 w-full h-[25vh]  '>
      <img src={img} className='lg:h-[85%] h-[80%] object-cover '/>
      <h1 className='lg:w-full h-[20%] font-["Basis_Grotesque_Pro"]  text-[#F6F4F2] bg-[#575146] flex items-center justify-center text-lg font-semibold uppercase '>{title}</h1>
    </div>
  )
}

export default Workcard