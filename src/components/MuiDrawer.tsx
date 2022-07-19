import React, { useState } from 'react'
import { Drawer, Typography, Box, IconButton} from '@mui/material';
import {Menu} from '@mui/icons-material';

function MuiDrawer() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <IconButton edge='start' color='inherit' aria-label='logo' onClick={()=>setIsOpen(true)}>
            <Menu/>
        </IconButton>
        <Drawer anchor='left' open={isOpen} onClose={()=>setIsOpen(false)}>
            <Box p={4} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6'> Side Panel</Typography>
            </Box>
        </Drawer>
    </>
  )
}

export default MuiDrawer