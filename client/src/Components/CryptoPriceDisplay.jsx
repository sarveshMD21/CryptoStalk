import React, { useEffect, useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import LineChart from './LineChart';


const CryptoPriceDisplay = ({id}) => {

  const [interval,setInterval]=useState("7d");
  const [loading,setLoading]=useState(true);
  const [priceData,setPriceData]=useState([]);
  const [labelData,setLabelData]=useState([]);
  const handleChange = (event) => {
    setInterval(event.target.value);
  };

  useEffect(()=>{
    const getData=async ()=>{
        const options = {
          url: `${import.meta.env.VITE_API_BASE_URL}/coin/${id}/history?timePeriod=${interval}`,
          
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
         setPriceData(Temp2);
         setLabelData(Temp1);
         
        }catch(error){
          console.log(error);
        }finally{
          setLoading(false);
        }
      }
      setLoading(true);
      getData();
  },[interval])


  useEffect(()=>{
    console.log("Loading state updated "+loading);
},[loading])

  return (
    <div className='w-full h-full flex flex-col '>
        <div className='h-20  flex flex-row justify-center pl-2 pr-2 pt-1'>
            <div className='text-lg mr-3 mt-5 dark:text-white'>Price change in last</div>
            <div className="mt-3">
            <Select
        id="interval-select"
        value={interval}
        label="interval"
        onChange={handleChange}
        style={{
            color: 'gray',
           backgroundColor:'#ADD8E6'
        }}
      > 
   
    <MenuItem value="7d" >7 days</MenuItem>
    <MenuItem value="30d">30 days</MenuItem>
    <MenuItem value="3m">3 months</MenuItem>
    <MenuItem value="1y">1 year</MenuItem>
    <MenuItem value="3y">3 year</MenuItem>
    <MenuItem value="5y">5 year</MenuItem>
        </Select>
            </div>
        </div>
        <div className='h-full  p-2 '>
            <LineChart priceData={priceData} labelData={labelData} loading={loading} />
        </div>
    </div> 
  )
}

export default CryptoPriceDisplay