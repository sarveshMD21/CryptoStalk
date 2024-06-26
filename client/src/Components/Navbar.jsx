import React from 'react'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { toggleAction } from '../redux/toggle-slice';
import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    
     const dispatch=useDispatch();
     const [checked, setChecked] = useState(false);
     const location=useLocation();

    
    const MaterialUISwitch = styled(Switch)(({ theme }) => ({
        width: 62,
        height: 34,
        padding: 7,
        '& .MuiSwitch-switchBase': {
          margin: 1,
          padding: 0,
          transform: 'translateX(6px)',
          '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
              )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
          width: 32,
          height: 32,
          '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
              '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
          },
        },
        '& .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
          borderRadius: 20 / 2,
        },
      }));

    const handleClick=(event)=>{
        setChecked(event.target.checked);
        dispatch(toggleAction.toggleDarkMode());
    }  

    const handleHamburgerClick=()=>{
        dispatch(toggleAction.toggleNavbar());
    }

  return (
    <div className='w-full flex flex-row pb-5  pt-4 pl-3 pr-3 dark:text-white bg-blue-500'>
        <div className='w-3/4 text-4xl font-bold'>
        CryptoStalk
        </div>
        <div className='hidden lg-custom:block w-1/4'>
        <div className='w-full flex flex-row justify-between'>
        <div className="flex items-center">
            <Link to="/" className={`text-lg ${location.pathname==='/'?'font-bold':'font-light'}`}>Home</Link>
        </div>
        <div className="flex items-center">
        <Link to="/compare" className={`text-lg ${location.pathname==='/compare'?'font-bold':'font-light'}`}>Compare</Link>
        </div>
        <div className="flex items-center">
        <Link to="/news" className={`text-lg ${location.pathname==='/news'?'font-bold':'font-light'}`}>News</Link>
        </div>
        <div className="flex items-center">
        <Link to="/coins" className={`text-lg ${location.pathname==='/coins'?'font-bold':'font-light'}`}>Dashboard</Link>
        </div>
        <div ><MaterialUISwitch   checked={checked} onChange={handleClick}/></div>
        </div>
        </div>
        <div className='lg-custom:hidden block w-1/4'>
        <div className='w-full h-full flex justify-center items-center hover:animate-pulse' onClick={handleHamburgerClick}>
        <img src={hamburger} className='w-5 h-5' />

        </div>
        </div>
    </div>
  )
}

export default Navbar