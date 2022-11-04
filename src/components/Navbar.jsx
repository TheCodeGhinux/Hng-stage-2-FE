import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

const Navbar = () => {
  const [nav, setNav]= useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 ' >
        <div className='flex items-center' >
            <div className='cursor-pointer' >
            <AiOutlineMenu onClick={()=> setNav(!nav)} size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>TCG <span className='font-bold' >Gadgets</span></h1>
          <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
            <p className='bg-black text-white rounded-full p-2' >Browse products</p>
            <p className='p-2'>Delivery</p>
          </div>
        </div>

        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={20}/>
          <input type="text" placeholder='Search products' className="bg-transparent p-2 focus:outline-none w-full" />
        </div>

        <button className='bg-black text-white hiden md:flex items-center py-2 rounded-full' >
          <BsFillCartFill size={20} className='mr-2' /> Cart
        </button>

        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>

        <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
          <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' />
          <h2 className="text-2xl p-4 ">TCG <span>Gagets</span></h2>
        </div>
    </div>
  )
}

export default Navbar