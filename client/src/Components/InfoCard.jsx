import React from 'react'

const InfoCard = () => {
  return (
    <div className='mb-10 p-5 shadow-lg w-3/4 flex mt-5 rounded-md flex-col dark:border-2 dark:border-blue-500'>
        <div className='flex justify-center font-bold text-lg md:text-3xl border-b-2 border-black dark:border-blue-500 mb-3'>Global Crypto Stats</div>
        <div className='flex flex-col md:flex-row justify-between mb-2'>
            <div className='flex flex-row justify-between  md:flex-col '>
                <div className='font-bold'>Total Crypto currencies:</div>
                <div>3000</div>
            </div>
            <div className='flex flex-row justify-between md:flex-col'>
                <div className='font-bold'>Total Exchanges:</div>
                <div>3000</div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between mb-2'>
            <div className='flex flex-row justify-between  md:flex-col'>
                <div className='font-bold'>Total Crypto currencies:</div>
                <div>3000</div>
            </div>
            <div className='flex flex-row justify-between md:flex-col'>
                <div className='font-bold'>Total Exchanges:</div>
                <div>3000</div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex flex-row justify-between  md:flex-col'>
                <div className='font-bold'>Total Crypto currencies:</div>
                <div>3000</div>
            </div>
            <div className='flex flex-row justify-between md:flex-col'>
                <div className='font-bold'>Total Exchanges:</div>
                <div>3000</div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard