import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CryptoSlice from './CryptoSlice';
import TablePagination from './TablePagination';



const CryptoTable = () => {
 
    const [offset,setOffset]=useState(0);
    const [coin,setCoin]=useState();
    

    useEffect(()=>{
    const getData=async ()=>{
      const options = {
        
        url: `${import.meta.env.VITE_API_BASE_URL}/coins?offset=${offset}&limit=${import.meta.env.VITE_LIMIT_PER_PAGE}`,
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
        console.log(coin);
      }catch(error){
        console.log(error);
      }
    }
    getData();
    },[offset])

   

  return (
    <div className='flex flex-col md:p-4 w-5/6 dark:bg-black dark:text-white  '>
        
        <div className='grid grid-cols-4 lg-custom:grid-cols-6 justify-between '>
        <div className='pl-1 pr-1 md:pl-3 md:pr-3 rounded-lg pt-2 pb-2 flex justify-center'>
            <div className='pl-3 pr-3 pt-1 pb-1 text-white bg-blue-500 rounded-lg '>Coin</div>
            </div>            
        <div className='pl-1 pr-1 md:pl-3 md:pr-3 rounded-lg pt-2 pb-2 flex justify-center'>
        <div className='pl-3 pr-3 pt-1 pb-1 text-white bg-blue-500 rounded-lg '>Ticker</div>
        </div>
            <div className='pl-1 pr-1 md:pl-3 md:pr-3 rounded-lg pt-2 pb-2 flex justify-center'>
            <div className='pl-3 pr-3 pt-1 pb-1 text-white bg-blue-500 rounded-lg '>Price</div>
            </div>
            <div className='pl-1 pr-1 md:pl-3 md:pr-3 rounded-lg pt-2 pb-2 flex justify-center'>
            <div className='pl-3 pr-3 pt-1 pb-1 text-white bg-blue-500 rounded-lg'>Change</div>
            </div>
            <div className='pl-1 pr-1 md:pl-3 md:pr-3 rounded-lg pt-2 pb-2 hidden lg-custom:block'>
               <div className='w-full flex justify-center'>
               <div className='pl-3 pr-3 pt-1 pb-1 text-white bg-blue-500 rounded-lg'>Volume</div>
               </div>
            </div>
            <div className='pl-1 pr-1 md:pl-3 md:pr-3 rounded-lg pt-2 pb-2  hidden lg-custom:block'> 
                <div className='w-full flex justify-center pl-3 pr-3 pt-1 pb-1 text-white bg-blue-500 rounded-lg'>Market Cap</div>
                </div>

        </div>
       
       <div>
        {coin&&coin.map((element)=>{
                return <CryptoSlice coin={element}/>
            })}
        </div>     
            
            
            
       
        <div className='flex justify-center w-full'>
          <TablePagination setOffset={setOffset}/>
        </div>
    </div>
  )
}

export default CryptoTable