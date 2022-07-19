import React from 'react'
import { CircularProgress, LinearProgress, Stack} from '@mui/material'
function MuiProgress() {
  return (
    <Stack spacing={2}>
        <CircularProgress />
        <CircularProgress value={60} variant='determinate' color='success' />
        <LinearProgress />
        <LinearProgress value={80} variant='determinate' color='success' />
    </Stack>
  )
}

export default MuiProgress