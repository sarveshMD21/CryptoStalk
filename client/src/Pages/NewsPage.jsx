import React from 'react'
import Navbar from '../Components/Navbar'
import NavbarDrawer from '../Components/NavbarDrawer'

const NewsPage = () => {
  return (
    <div className='flex flex-col w-screen h-screen dark:bg-black'>
        <Navbar/>
        <div className='w-screen'>
            news
      
       <NavbarDrawer/>
       
       
        </div>
    </div>
  )
}

export default NewsPage