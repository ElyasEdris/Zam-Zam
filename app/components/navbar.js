"use client"
import React from 'react'
import { useState } from 'react';

const navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>

    <header className="bg-blue-800 text-gray-200 body-font sticky top-0 ">
  <div className=" flex  p-5 justify-between md:flex-row items-center">
    <div className="flex  title-font font-medium  text-gray-900  md:mb-0">
      <h1>logo</h1>
      <div className="flex flex-col title-font font-medium  text-gray-200  md:mb-0">
      <span className="ml-3 text-xl font-bold ">Zam Zam </span>
      <span className='ml-3 text-md'>Radiologys</span>
      </div>
      
    </div>
    <nav className="hidden md:ml-auto flex flex-wrap items-center text-base justify-center  lg:block md:block">
      <a className="mr-5 cursor-pointer hover:border-2  py-2.5 px-2.5 hover:bg-gray-200 rounded-e-2xl hover:text-gray-900 ">First Link</a>
      <a className="mr-5 cursor-pointer hover:border-2  py-2.5 px-2.5 hover:bg-gray-200 rounded-e-2xl hover:text-gray-900">Second Link</a>
      <a className="mr-5 cursor-pointer hover:border-2  py-2.5 px-2.5 hover:bg-gray-200 rounded-e-2xl hover:text-gray-900">Third Link</a>
      <a className="mr-5 cursor-pointer hover:border-2  py-2.5 px-2.5 hover:bg-gray-200 rounded-e-2xl hover:text-gray-900">Fourth Link</a>
    </nav>
    <div>
      {
      isOpen ? <button onClick={()=> setIsOpen(false)} className='lg:hidden md:hidden'>nothing</button> : <button onClick={()=> setIsOpen(!isOpen)} className='lg:hidden md:hidden'>☰</button>
    }
    </div>
    
  </div>
  
</header>
{
      isOpen && 
      <div className="bg-sky-500 flex flex-col h-[50vh] w-full  items-center text-base justify-center items-center text-gray-200 lg:hidden md:hidden">
        
      <a className="mr-5 cursor-pointer hover:border-2  py-2.5 px-2.5 hover:bg-gray-200 rounded-e-2xl hover:text-gray-900" onClick={()=> setIsOpen(false)}>First Link</a>
      <a className="mr-5 cursor-pointer hover:border-2  py-2.5 px-2.5 hover:bg-gray-200 rounded-e-2xl hover:text-gray-900" onClick={()=> setIsOpen(false)}>Second Link</a>
      <a className="mr-5 cursor-pointer hover:border-2  py-2.5 px-2.5 hover:bg-gray-200 rounded-e-2xl hover:text-gray-900" onClick={()=> setIsOpen(false)}>Third Link</a>
      <a className="mr-5 cursor-pointer hover:border-2  py-2.5 px-2.5 hover:bg-gray-200 rounded-e-2xl hover:text-gray-900" onClick={()=> setIsOpen(false)}>Fourth Link</a>
    </div>
    }
    </div>
  )
}

export default navbar