import React from 'react';
import { Stack, Link} from '@mui/material';

function MuiLink() {
  return (
    <Stack spacing={2} direction='row'>
        <Link 
        href='#' 
        variant='h6' 
        color='secondary'
        underline='none'
        >Secondary</Link>
    </Stack>
  )
}

export default MuiLink