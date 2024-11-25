import React from 'react'
import { IoMdHome, IoMdSearch } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'> 
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <IoMdHome className='w-6 h-[40px]' />
            <p className='font-bold'>Home</p>     
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <IoMdSearch className='w-6 h-[40px]' />
            <p className='font-bold'>Search</p>     
      
            </div>

        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
            <IoMdSearch className='w-6 h-[40px]' />
            <p className='font-semibold'>Your Library</p>    
            </div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar