import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NavbarDrawer from '../Components/NavbarDrawer'
import OptionStack from '../Components/OptionStack';
import { useRef } from 'react';
import axios from 'axios';

const ComparePage = () => {

 const [crypto1,setCrypto1]=useState(null);
 const [crypto2,setCrypto2]=useState(null);
 const [coin,setCoin]=useState(null);
 const [time,setTime]=useState("7d");



 //const clickProcessing = useR;

 useEffect(()=>{
  const getData=async ()=>{
      const options = {
        url: `${import.meta.env.VITE_API_BASE_URL}/coins?limit=1500`,
        params: {
            timePeriod: '1h',
          },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_API_KEY,
          'x-rapidapi-host': import.meta.env.VITE_API_HOST
        }
      };
      try{
        const response = await axios.request(options);
       
        setCoin(response.data.data.coins);
      }catch(error){
        console.log(error);
      }
    }    
   
    getData();

},[])

const handleChange = (event) => {
  setTime(event.target.value); // Update state with selected option value
};

const handleClick=()=>{
  console.log(time);
  console.log(crypto1);
  console.log(crypto2);
}

  return (
    <div className='flex flex-col w-screen h-screen dark:bg-black overflow-y-auto overflow-x-hidden'>
        <Navbar/>
        <div className='w-screen h-full  p-5 md:p-10'>
         <div className=' w-full h-screen flex flex-col'>
          <div className='w-full flex  flex-col lg-custom:flex-row pl-2 pr-2 pt-2 justify-between '>
          
          <div className='flex mb-5  lg-custom:w-1/3 w-full lg-custom:justify-end  justify-center '>
          
          <div className='w-5/6 relative'>
         
           {coin&&<OptionStack coin={coin} setCrypto={setCrypto1} crypto={crypto1} />}
          </div>
           
           </div>
           <div className='flex mb-5   lg-custom:w-1/3 w-full lg-custom:justify-center  justify-center'>
           <div className='w-5/6  relative'>
        
           {coin&&<OptionStack coin={coin} setCrypto={setCrypto2} crypto={crypto2} />}
         </div>
         </div>
          
             
             <div className='flex mb-5 lg-custom:w-1/3 w-full lg-custom:justify-start  pl-8 md:pl-14 justify-center '>
            <div className='flex flex-row w-full   pr-2'>
            <select className='p-3 border-2 border-blue-500 rounded-lg mr-5'  onChange={handleChange} >
            <option value="7d">7 days</option>
            <option value="30d">30 days</option>
            <option value="3m">3 months</option>
            <option value="1y">1 year</option>
            <option value="3y">3 year</option>
            <option value="5y">5 year</option>
           </select>
           <button className='p-3 ml-5 border-2 border-blue-500 bg-blue-500 text-white rounded-lg hover:bg-blue-200 hover:text-black' onClick={handleClick}>
            Compare
           </button>
            </div> 
          
            </div>
          </div>
          </div> 
        </div>
        <NavbarDrawer/>
    </div>
  )
}

export default ComparePage