import React, { useState } from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
function MuiDialog() {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog aria-labelledby='dialog-title' aria-describedby='dialog-content' open={open}>
            <DialogTitle id='dialog-title'>Are you sure Submit Form?</DialogTitle>
            <DialogContent id='dialog-content' >
                <DialogContentText id='dialog-text'>
                    Once you submit the form, the changes were never be reverted.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={()=>setOpen(false)} >Submit</Button>
                <Button onClick={()=>setOpen(false)}>Cancel</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default MuiDialog