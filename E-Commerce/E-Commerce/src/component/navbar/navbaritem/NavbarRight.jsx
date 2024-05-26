import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { GrBasket } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";


export default function NavbarRight() {
  return (
    <div className="flex items-center gap-3 my-4 ">

      <div className='flex items-center justify-beetween gap-8 border-5  '>
        <div className='flex bg-gray-300 border- rounded-3 items-center pr-10 pl-25   py-1 '>
          <input type='text' placeholder='Arama Yapınız' className='bg-gray-300 text-black '/>
          </div>
        <AiOutlineSearch size={25}/>
      </div>

      <FiHeart size={25}/>
      <div className='relative'>
        <div className='absolute -top-4 -right-3 bg-red-500 rounded-4 text-white w-5 h-5 pl-1 pb-2 justify-center'>3</div>
        <GrBasket size={25}/></div>
      
    </div>
  )
}
