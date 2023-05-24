import React from 'react'
import Gala from '../Icons/Gala.jpg'
import {Link} from 'react-scroll'
import {RiArrowRightCircleFill} from 'react-icons/ri'

const Home = () => {
  return (
    <div 
    name='home' 
    className='h-screen w-full pt-16 bg-gradient-to-b  from-black  via-black to-gray-800'>
        <div 
        className='max-w-screen-lg mx-auto flex flex-col items-center 
         justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl animate-pulse sm:text-7xl font-bold text-green-500'>
                    Network Engineer & Database Admin
                </h2>
                <p className='py-4 max-w-md text-white'>
                    I'am a graduate from the University of Malawi. Am passionate about Computer
                    Networks and Database Systems.
                </p>
                <div>
                    <Link to="contact" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center
                     rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Contact 
                        <span className='group-hover:rotate-90 duration-300'><RiArrowRightCircleFill size={30} className='ml-1'/></span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={Gala} alt="profile" className='rounded-2xl mx-auto w-2/3 md:w-full hover:scale-90 duration-300'/>
            </div>
        </div>
    </div>
  )
}

export default Home