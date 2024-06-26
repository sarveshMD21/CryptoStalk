import React from 'react'
import Navbar from '../Components/Navbar'
import NavbarDrawer from '../Components/NavbarDrawer'

const HomePage = () => {
  return (
    <div className='flex flex-col w-screen h-screen dark:bg-black'>
        <Navbar/>
        <div className='w-screen'>
            home
      
       <NavbarDrawer/>
       
       
        </div>
    </div>
  )
}

export default HomePage