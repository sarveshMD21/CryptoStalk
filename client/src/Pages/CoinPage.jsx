import React from 'react'
import Navbar from '../Components/Navbar'
import NavbarDrawer from '../Components/NavbarDrawer'
import InfoCard from '../Components/InfoCard'

const CoinPage = () => {

  return (
    <div className='flex flex-col w-screen h-screen dark:bg-black bg-pale-blue'>
        <Navbar/>
        <div className='w-screen flex flex-col dark:text-white border-2 border-green-400 pl-10 pr-10'>
            <div className='flex justify-center'>
                <InfoCard/>
            </div>
            <div className='flex justify-center w-full '>
                <div className='w-2/3 h-16 border-2 border-black dark:border-blue-500 rounded-full'>
                <input type='text' placeholder='search your crypto here....' className='input rounded-full w-full h-full shadow-lg dark:bg-black dark:text-white' />
                </div>
            
            </div>
            <div className='flex justify-center mt-5'>table ayega yaha par</div>
       <NavbarDrawer/>
        </div>
    </div>
  )
}

export default CoinPage