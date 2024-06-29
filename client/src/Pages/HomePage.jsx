import React from 'react'
import Navbar from '../Components/Navbar'
import NavbarDrawer from '../Components/NavbarDrawer'
import { Link } from 'react-router-dom'
import { iphone,gradient } from '../assets/icons'
import { motion } from 'framer-motion';


const HomePage = () => {
  return (
    <div className='flex relative flex-col w-screen h-screen overflow-x-hidden dark:bg-black'>
        <div className='absolute z-10 w-full'>
        <Navbar/>
        </div>
        <div className='w-full flex lg:flex-row flex-col justify-center  p-3 min-h-screen '>
         <div className='lg:w-1/2 lg:h-full w-full h-1/2 flex-col pt-20  '>
         <div className='font-bold text-black dark:text-white text-4xl md:text-8xl m-3'>Track Crypto</div>
         <div className='font-bold text-blue-500 text-4xl md:text-8xl m-3'>Real Time.</div>
         <div className='text-light mt-2 md:mt-10 pl-5'>Track real time crypto data fetched from public API</div>
         <div className='mt-2 p-3 lg:p-5 border-2 border-blue-500 bg-blue-100 dark:text-slate-500 hover:bg-blue-500 rounded-lg inline-block ml-5'>
          <Link to="/coins">Go to Dashboard</Link>
         </div>
         </div>
         <div className='lg:w-1/2 lg:h-full w-full h-1/2 pl-10 pt-20 relative '>
         <div className='absolute z-10'>
          <motion.img src={iphone} 
          className='w-60 md-custom:w-5/6 '
           animate={{ y: [0, -10, 0] }} // Animate y position: start at 0, move up by -10, then return to 0
        transition={{ duration: 1.5, repeat: Infinity }} // Duration of each cycle and repeat indefinitely
          />
         </div>
         <div className='absolute'>
          <motion.img src={gradient}
           className='w-56 md-custom:w-5/6 lg:w-full mt-10 md-custom:ml-15 lg:ml-20'
           animate={{ y: [0, -10, 0] }} // Animate y position: start at 0, move up by -10, then return to 0
        transition={{ duration: 1.5, repeat: Infinity }} // Duration of each cycle and repeat indefinitely
           />
         </div>
         </div> 
        </div>
        <NavbarDrawer/>
    </div>
  )
}

export default HomePage