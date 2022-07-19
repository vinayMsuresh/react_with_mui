import React from 'react'
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Save } from '@mui/icons-material';

function MuiLoadingButton() {
  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton loading variant='contained'>Fetch</LoadingButton>
        <LoadingButton variant='contained'>Fetch</LoadingButton>

        <LoadingButton loading variant='outlined' loadingIndicator='load...'>Fetch</LoadingButton>
        <LoadingButton variant='outlined' loadingIndicator='load...'>Fetch</LoadingButton>

        <LoadingButton loading variant='outlined' loadingPosition='start' startIcon={<Save/>}>Save</LoadingButton>
        <LoadingButton variant='outlined' loadingPosition='end' endIcon={<Save/>}>Save</LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton