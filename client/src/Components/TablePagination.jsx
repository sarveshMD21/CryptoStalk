import React from 'react'
import Pagination from '@mui/material/Pagination';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

const TablePagination = ({setOffset}) => {

  const dark=useSelector((state)=>state.toggle.dark); 
 
  
  const theme = createTheme({
    palette: {
      mode: 'light', // Default to light mode
      primary: {
        main: '#1976d2', // Primary color for pagination
      },
      background: {
        default: '#ffffff', // Light mode background
      },
      text: {
        primary: '#000000', // Text color for light mode
      },
    },
  });
  
  // Dark mode variant of the theme
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9', // Primary color for pagination in dark mode
      },
      background: {
        default: '#121212', // Dark mode background
      },
      text: {
        primary: '#ffffff', // Text color for dark mode
      },
    },
  });

  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(()=>{
    setCurrentTheme(dark?darkTheme:theme);
  },[dark]);


  const handleChange=(event,page)=>{
    setOffset((page-1)*import.meta.env.VITE_LIMIT_PER_PAGE);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Pagination
        count={100}
        color="primary"
        onChange={handleChange}
      />
       
    </ThemeProvider>
      
  )
}

export default TablePagination