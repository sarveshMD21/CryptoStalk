import React from 'react'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { alertSliceActions } from '../redux/alert-slice';


const ErrorAlert = ({label}) => {
  const dispatch=useDispatch();
  const isAlert=useSelector((state)=>state.alert.isAlert);  
  
  const handleClose=()=>{
    dispatch(alertSliceActions.setClose());
  }

  return (
    <div className='w-full '>
         <Snackbar open={isAlert} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {label}
        </Alert>
      </Snackbar>
      
    </div>
  )
}

export default ErrorAlert