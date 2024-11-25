import React from 'react'
import { IoMdHome, IoMdSearch } from "react-icons/io";
import { BiLibrary } from "react-icons/bi";
import { FaArrowRight, FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'> 
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <IoMdHome className='w-8 h-[40px]' />
            <p className='font-bold'>Home</p>     
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <IoMdSearch className='w-8 h-[40px]' />
            <p className='font-bold'>Search</p>     
      
            </div>

        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
            <BiLibrary className='w-10 h-[40px]' />
            <p className='font-semibold'>Your Library</p>    
            </div>
            <div className='flex items-center gap-3'>
            <FaArrowRight className='w-5' />
            <FaPlus className='w-5' />
            </div>
          </div>

          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create your first playlist</h1>
            <p className='font-light'>Its easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-black font-bold text-[15px] rounded-full mt-4'>Create playlist</button>
          </div>
          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
            <h1>Lets find some podcast to follow</h1>
            <p className='font-light'>We will keep you updated with new podcasts</p>
            <button className='px-4 py-1.5 bg-white text-black font-bold text-[15px] rounded-full mt-4'>Browse podcasts</button>
          </div>
          
        </div>
    </div>
  )
}

export default Sidebar