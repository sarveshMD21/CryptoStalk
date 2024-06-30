import React, { useEffect, useState } from 'react'
import ErrorAlert from './ErrorAlert';
import { useDispatch } from 'react-redux';
import { alertSliceActions } from '../redux/alert-slice';

const OptionStack = ({coin,setCrypto,crypto}) => {

  const [search,setSearch]=useState("");
  const [flag,setFlag]=useState("");
  const [option,setOption]=useState(null);
  let message="Select proper Crypto";
  const dispatch=useDispatch();

  useEffect(()=>{
     if(search!=""){
        const data=[];
        const value=search.toLowerCase();
        coin.map((item)=>{
            const name=item.name.toLowerCase();
            //console.log(name + " "+search );

            if(name.includes(value)){
                data.push(item);
            }
        })
        //console.log(coin);
        setOption(data);
        setFlag(true);
     }
     else{
        setCrypto(null);
        setFlag(false);
     }
  },[search])


  const handleBlur=(event)=>{
    setTimeout(()=>{
        setFlag(false);
    },[200]);
  }

 const handleKeyDown=(event)=>{
    if((event.key === 'Enter' || event.keyCode === 13)){
        //console.log("hello2");

        const value=search.toLowerCase();
        let flag=1;
        coin.map((item)=>{
            const name=item.name.toLowerCase();
            //console.log(name + " "+search );

            if(name===value){
                flag=0;
                //dis
            }
        })
        console.log(flag);
        if(flag==1){
            
            dispatch(alertSliceActions.setOpen());
        }
    }
    setFlag(false);
 }

  const handleClick=(uuid,name)=>{
    setCrypto(uuid);
    setSearch(name);
    setFlag(false);
  }

  return (
    <div className='w-full   flex flex-col '>
        <input className='w-full border-2 h-14 border-blue-500 rounded-lg pl-2' placeholder='Crypto' value={search} 
        onChange={(e)=>setSearch(e.target.value)}
        onBlur={(e)=>handleBlur(e)}
        onKeyDown={(e)=>handleKeyDown(e)}
        />
        {flag&&<div className='w-full  absolute z-10 mt-16 flex flex-col h-40 overflow-y-auto'>
        {option.map((item)=>{
            return <div key={item.uuid} className='w-full pl-2 bg-blue-500 text-white' onClick={()=>handleClick(item.uuid,item.name)}>{item.name}</div>
        })}
        </div>}
        <ErrorAlert label={message}/>
    </div>
  )
}

export default OptionStack