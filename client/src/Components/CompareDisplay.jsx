import React from 'react'
import WaitingComponent from './WaitingComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import DoubleLineChart from './DoubleLineChart';

const CompareDisplay = ({crypto1,crypto2,time}) => {

    const [loading1,setLoading1]=useState(false);
    const [loading2,setLoading2]=useState(false);

    const [priceData1,setPriceData1]=useState([]);
    const [labelData1,setLabelData1]=useState([]);  
    const [priceData2,setPriceData2]=useState([]);
    const [labelData2,setLabelData2]=useState([]);  

   
   useEffect(()=>{
     if(crypto1!=null&&crypto2!=null){

        const getData=async ()=>{
          const options = {
            url: `${import.meta.env.VITE_API_BASE_URL}/coin/${crypto1}/history?timePeriod=${time}`,
            
            headers: {
              'x-rapidapi-key': import.meta.env.VITE_API_KEY,
              'x-rapidapi-host': import.meta.env.VITE_API_HOST
            }
          };
          try{
            const response = await axios.request(options);
           
            const data=response.data.data.history;
            const temp1=[];
            const temp2=[];
            data.map((item)=>{
              const date = new Date(item.timestamp * 1000);
              const formattedDate = date.toLocaleString();
             
              if(formattedDate.includes("5:30:00 AM")){
              item.timestamp=formattedDate.substring(0,9);
              temp1.push(item.timestamp);
              temp2.push(item.price);
              }
            })
           const Temp1=temp1.reverse();
           const Temp2=temp2.reverse();
          // console.log(Temp2);
           setPriceData1(Temp2);
           setLabelData1(Temp1);
           
          }catch(error){
            console.log(error);
          }finally{
            setLoading1(false);
          }
        }

        setLoading1(true);
        getData();
     }
   },[crypto1,crypto2,time]);

   useEffect(()=>{
    if(crypto1!=null&&crypto2!=null){

       const getData=async ()=>{
         const options = {
           url: `${import.meta.env.VITE_API_BASE_URL}/coin/${crypto2}/history?timePeriod=${time}`,
           
           headers: {
             'x-rapidapi-key': import.meta.env.VITE_API_KEY,
             'x-rapidapi-host': import.meta.env.VITE_API_HOST
           }
         };
         try{
           const response = await axios.request(options);
          
           const data=response.data.data.history;
           const temp1=[];
           const temp2=[];
           data.map((item)=>{
             const date = new Date(item.timestamp * 1000);
             const formattedDate = date.toLocaleString();
            
             if(formattedDate.includes("5:30:00 AM")){
             item.timestamp=formattedDate.substring(0,9);
             temp1.push(item.timestamp);
             temp2.push(item.price);
             }
           })
          const Temp1=temp1.reverse();
          const Temp2=temp2.reverse();
        //  console.log(Temp2);
          setPriceData2(Temp2);
          setLabelData2(Temp1);
          
         }catch(error){
           console.log(error);
         }finally{
           setLoading2(false);
         }
       }

       setLoading2(true);
       getData();
    }
  },[crypto1,crypto2,time]);

  return (
    <div className='w-full h-full'>
        {loading1&&loading2&&<div className='w-full h-full justify-center items-center'>
        <WaitingComponent label="Making Your Graph for you"/>
        </div>}
        {!loading1&&!loading2&&<div className='w-full h-full dark:bg-slate-800'>
          <DoubleLineChart priceData1={priceData1} priceData2={priceData2} labelData1={labelData1} labelData2={labelData2}/></div>}
    </div>
  )
}

export default CompareDisplay;