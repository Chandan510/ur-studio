import React from 'react'
import Workcard from '../components/Workcard'
import img from '../assets/img-2.webp'
import img3 from '../assets/file.jpg'
import imgfurniture from '../assets/imgfurniture.jpg'
import imgbathroom from '../assets/imgbathroom.jpg'
import imgcommercial from '../assets/imgcommercial.jpg'
import imgkitchen from '../assets/imgkitchen.jpg'

function Services() {
  return (
    <div className='lg:w-full lg:h-screen w-full h-fit mt-[10vh] overflow-x-hidden'>
        <div className='w-full h-full  lg:p-10 flex flex-col items-center'>
        <h1 className='font-["Basis_Grotesque_Pro"] text-black font-bold tracking-[.3em] sm:text-center mb-10 lg:text-sm text-xs'>SERVICES</h1>
        <h1 className='font-["Basis_Grotesque_Pro"] text-black font-bold tracking-wide  text-3xl mb-3 text-center px-11 '>WE HAVE BEEN DESIGNING YOUR INTERIORS</h1>
        <h1 className='font-["Basis_Grotesque_Pro"] text-[#C19A5B] italic font-bold tracking-wide lg:text-2xl text-xl '> - SINCE 2010 - </h1>
        <div className='work-folio flex lg:flex-row flex-col  h-full w-full mt-10 lg:p-3 gap-10  px-6 '>
            <Workcard title={'Renovation'} img={img} />
            <Workcard title={'New Construction'} img={img3}/>
            <Workcard title={'Kitchen'} img={imgkitchen}/>
            <Workcard title={'Bathroom'} img={imgbathroom}/>
            <Workcard title={'Custom furniture'} img={imgfurniture}/>
            <Workcard title={'Commercial'} img={imgcommercial}/>
            
        </div>
        </div>
    </div>
  )
}

export default Services