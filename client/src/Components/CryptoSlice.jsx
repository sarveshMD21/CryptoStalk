import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';

const CryptoSlice = ({coin,index}) => {

    const navigate=useNavigate();

    const reducePrice=(number)=>{
        const num1=number.substring(0,number.indexOf('.'));
        if(num1.length>=7)
            return num1
        let rem=7-num1.length;
        const num2=number.substring(number.indexOf('.'),number.indexOf('.')+rem);
        return num1+num2;
    
    }
    console.log(index*100);
    
    const calculateVolume=(price,marketCap)=>{
        let num1=parseFloat(price);
        let num2=parseFloat(marketCap);
        const result = num2 / num1;
    
        return Math.floor(result);
        //return result;
    }

    const isChangePositive=(value)=>{
        if(value.includes('-'))
            return false;
        return true;
    }

    const handleClick=()=>{
        console.log(coin.uuid);
        navigate(`/${coin.uuid}`);
    }


  return (
   
    <div className=" animate-slideIn delay-1400 " onClick={handleClick}>
        <div className='w-full dark:text-white hover:bg-blue-500 rounded-lg mb-2 grid grid-cols-4 lg-custom:grid-cols-6 justify-between md:p-2 mt-5 border-2 border-blue-500'>
        <div className=' flex justify-center'>
            <img src={coin.iconUrl} className= 'lg:20  md:w-10 md:h-10 w-4 h-6'/>
        </div>
        <div className='flex justify-center font-bold'>
            {coin.symbol}
           
        </div>
        <div className='flex justify-center text-sm font-bold'>{reducePrice(coin.price)}</div>
        <div className='flex justify-center font-bold'>{isChangePositive(coin.change)?
            <div className='text-green-500'>
               <ArrowDropUpIcon/> {coin.change}
            </div>:
            <div className='text-red-500'>
               <ArrowDropDownIcon/> {coin.change.substring(1)}</div>}</div>
        <div className='flex justify-center'>
            <div className=' hidden lg-custom:block font-bold'>{calculateVolume(coin.price,coin.marketCap)}</div>
        </div>
        <div className='flex justify-center'>
            <div className=' hidden lg-custom:block font-bold'>{coin.marketCap}</div>
        </div>
        </div>
        
    </div>
    
  )
}

export default CryptoSlice