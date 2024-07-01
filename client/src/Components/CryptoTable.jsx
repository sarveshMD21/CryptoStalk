import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CryptoSlice from './CryptoSlice';
import TablePagination from './TablePagination';
import WaitingComponent from './WaitingComponent';
import { useSelector } from 'react-redux';

const CryptoTable = ({search}) => {
 
    const [offset,setOffset]=useState(0);
    // const [coin,setCoin]=useState([]);
    const [displayCoin,setDisplayCoin]=useState([]);
    const [loading,setLoading]=useState(true);
    const [filter,setFilter]=useState([]);
    
    const coin=useSelector((state)=>state.crypto.coins);

    // useEffect(()=>{
    //     const getData=async ()=>{
    //         const options = {
    //           url: `${import.meta.env.VITE_API_BASE_URL}/coins?limit=1500`,
    //           params: {
    //               timePeriod: '1h',
    //             },
    //           headers: {
    //             'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    //             'x-rapidapi-host': import.meta.env.VITE_API_HOST
    //           }
    //         };
    //         try{
    //           const response = await axios.request(options);
    //           const Jsonobject=JSON.stringify(response.data.data.coins)
    //           // localStorage.setItem("data",Jsonobject);
    //           // console.log(Jsonobject);
    //           setDisplayCoin(response.data.data.coins.slice(0,15));
    //           setCoin(response.data.data.coins);
    //           setFilter(response.data.data.coins);
    //          // console.log(coin);
    //         }catch(error){
    //           console.log(error);
    //         }finally{
    //           setLoading(false);
    //         }
    //       }
    //       //localStorage.removeItem("data");
          
    //       setLoading(true);
    //       getData();
         
    //       // setLoading(true);
    //       // getData();
         
    //       //console.log("Fetched from loaclStorage: "+value.length);
    // },[])

    useEffect(()=>{
    const changeData= ()=>{
        
         const limit=parseInt(import.meta.env.VITE_LIMIT_PER_PAGE);
        //console.log(typeof(limit));
         try{
            if(coin!=null)
            setDisplayCoin(filter.slice(offset,offset+limit));
            console.log(displayCoin);
         }catch(error){
            console.log(error);
         }
         finally{
            setLoading(false);
         }
    }
    setLoading(true);
    changeData();
    },[offset,filter])

    useEffect(()=>{
        console.log("Loading state updated "+loading);
    },[loading])
   

    useEffect(()=>{

        console.log(search);
        setLoading(true);
        if(search!=""){
            const data=[]
            const func=(coin)=>{
                coin.map((element)=>{
                  const Name=element.name.toLowerCase();
                  const symbol=element.symbol.toLowerCase();
                    if(Name.includes(search)||symbol.includes(search)){
                        data.push(element);
                    }
                })
            }
            func(coin);
            setFilter(data);
            setOffset(0);
            console.log(data);
            //console.log(offset);
        }
        else{
            setFilter(coin);
            setOffset(0);
        }
        setLoading(false);
        
    },[search])
    


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
       
        {!loading&&displayCoin&&displayCoin.map((element,index)=>{
                return <div key={element.uuid} ><CryptoSlice  coin={element} index={index}/></div>
            })}
       
       {loading&&
        <WaitingComponent label="fetching your data kindly wait"/>
        }
        
      <div className={`flex justify-center w-full ${loading?'hidden':'block'}`}>
        <TablePagination setOffset={setOffset} limit={filter.length} /> 
      </div>
        

       
        
    </div>
  )
}

export default CryptoTable