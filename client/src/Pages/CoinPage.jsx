import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NavbarDrawer from '../Components/NavbarDrawer'
import InfoCard from '../Components/InfoCard'
import CryptoTable from '../Components/CryptoTable'

const CoinPage = () => {

  const [search,setSearch]=useState("");
  
 
  return (
    <div className='flex flex-col w-screen h-screen overflow-auto overflow-x-hidden dark:bg-black bg-pale-blue'>
        <Navbar/>
        <div className='w-screen flex flex-col dark:text-white  md:pl-10 md:pr-10'>
            <div className='flex justify-center'>
                <InfoCard/>
            </div>
            <div className='flex justify-center '>
                <div className='w-2/3 h-16 border-2 border-black dark:border-blue-500 rounded-full'>
                <input type='text' placeholder='search your crypto here....' className='input rounded-full w-full h-full shadow-lg dark:bg-black dark:text-white' value={search} onChange={(e)=>setSearch(e.target.value)} />
                </div>
            
            </div>
            <div className='flex justify-center mt-5'>
              <CryptoTable search={search}/>
            </div>
       
        </div>
        <NavbarDrawer/>
    </div>
  )
}

export default CoinPage