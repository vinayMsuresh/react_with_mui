import React, { useState, forwardRef } from 'react'
import {Button, Snackbar, AlertProps, Alert, AlertTitle} from '@mui/material';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)
function MuiSnackbar() {
    const [open, setOpen] = useState(false);
    const handleClose = (
        event?: React.SyntheticEvent| Event, 
        reason?: string
    ) => {
        if(reason === 'clickaway') {
            return
        }
        setOpen(false);
    }
  return (
    <>
        <Button onClick={()=>setOpen(open=>!open)}>SUBMIT</Button>
        {/* <Snackbar
            message='Form submitted successfully'
            autoHideDuration={3000}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
        /> */}

        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <SnackbarAlert severity='success' onClose={handleClose}>
                {/* <AlertTitle>Form Alert</AlertTitle> */}
                Form Submitted successfully
            </SnackbarAlert>
        </Snackbar>
    </>
  )
}

export default MuiSnackbar