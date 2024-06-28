import React from 'react'
import Navbar from '../Components/Navbar'
import NavbarDrawer from '../Components/NavbarDrawer'
import CryptoSlice from '../Components/CryptoSlice'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import WaitingComponent from '../Components/WaitingComponent';

const CoinDisplay = () => {

    const location=useLocation();
    const id=location.pathname.substring(1);

    console.log(id);

    const [coin,setCoin]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const getData=async ()=>{
            const options = {
              url: `${import.meta.env.VITE_API_BASE_URL}/coin/${id}`,
              
              headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': import.meta.env.VITE_API_HOST
              }
            };
            try{
              const response = await axios.request(options);
             
              setCoin(response.data.data.coin);
             
             
            }catch(error){
              console.log(error);
            }finally{
              setLoading(false);
            }
          }
          setLoading(true);
          getData();
        
    },[])

    useEffect(()=>{
        console.log("Loading state updated "+loading);
    },[loading])

   console.log(coin);
  return (
    <div className='flex flex-col w-screen h-screen overflow-auto overflow-x-hidden  dark:bg-black bg-pale-blue'>
        {!loading&&<Navbar/>}
        {!loading&&<div className='w-full h-screen flex justify-center md:p-10 p-2'>
       
        <div className='w-full h-screen flex flex-col border-2 border-green-500'>
            <div className='p-5'>
            <CryptoSlice coin={coin}/>
            </div>
            
        </div>
        
        </div>}
        {!loading&&<NavbarDrawer/>}
        {loading&&<WaitingComponent label="Just a moment"/>}
    </div>
  )
}

export default CoinDisplay