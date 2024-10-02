import { opportunities } from '@/constants/arrays'
import { div } from 'framer-motion/client'
import React from 'react'

const StartFree = () => {
  return (
   <div className='max-w-[600px]  pt-[50px] p-5 bg-slate-50 rounded-xl'>
    <div className='flex flex-col gap-y-4'>
      <h1 className='text-black font-semibold md:text-3xl lg:text-4xl mb-[50px]'>Get started for free</h1>  
      {
        opportunities.map((item,index)=>( 
        <div key={index} className='flex flex-col gap-y-3'>
            <span className='flex gap-x-5 items-center '>
             <item.icon className='text-green-500'/>
             <h1 className='text-black font-semibold text-2xl'>{item.title}</h1>
            </span>
            <p className='text-black pr-8 '>
                {item.text}
            </p>
        </div>
        ))
      }
    </div>
   </div>
  )
}

export default StartFree