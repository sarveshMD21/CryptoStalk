import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';


const WaitingComponent = ({label}) => {
  return (
    <div className='flex justify-center  mt-10 flex-col'>
            <div className='flex w-full justify-center'> <CircularProgress/></div>
            <div className='flex w-full justify-center text-sm text-slate-400 mt-2'>{label}</div>
        </div>
  )
}

export default WaitingComponent