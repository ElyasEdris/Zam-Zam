"use client"
import React, { useState, useEffect } from 'react'
import {data} from "./data"
import { background } from './data'
import Image from "next/image"

const page = () => {

  const [image, setImage]= useState(0)
   useEffect(() => {

    const interval = setInterval(() => {

      setImage((prev) =>
        prev === background.length - 1 ? 0 : prev + 1
      )

    }, 5000)

    return () => clearInterval(interval)

  }, [])
  return (

      <div>

        <section className='flex w-screen h-[40vh] bg-cover bg-center' style={{backgroundImage:`url(${background[image].image})`}}>
          
            
              <div  className='flex flex-col justify-center  w-screen h-[30vh] bg-cover bg-center pl-[60px]'>
                <h1 className='text-4xl text-white font-bold '>Advanced MRI & <br/> CT Scan Services</h1>
                <p className='font-bold text-gray-200'>Professional Radiology Services with <br/>Modern Technology</p>
                {/* <button className='bg-blue-500 w-[250px] h-auto px-[15px] py-[8px] mt-[15px] hover:bg-transparent transition-all duration-300 rounded-sm'>Book Apppintment</button> */}
              </div>
            
          
        </section>
        <h1 className='text-blue-700 text-center text-3xl font-bold font-sans'>MRI Department</h1>
    <section className='flex flex-row justify-center  shadow-gray-800 w-full h-[30vh] px-7.5 py-5 gap-5 '>
      {
        data.map((e, index)=> (
          <div key={index} className='flex  bg-gray-200 shadow-[5px_20px_60px_0] rounded-2xl bg-contain bg-no-repeat  bg-left  w-[35%] hover:scale-105 transition-all duration-300'>
            <div className='relative h-full w-[90%]'>

            <Image src={e.image} alt={e.name} fill className=' object-cover p-2.5 rounded-3xl' />
            </div>
            <div className='flex flex-col items-center w-full text-center '>
            <h1 className='w-full text-center font-bold font-sans text-blue-700 '>{e.name}</h1>
              <p className='font-bold font-sans text-blue-700 '>{e.desc}</p>
            
            </div>
          </div>

        ))
          
        
      }
    </section>
      </div>


  )
}

export default page