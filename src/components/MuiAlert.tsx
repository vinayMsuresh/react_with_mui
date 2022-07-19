import React, { useState } from 'react'
import { Stack, Alert, Button} from '@mui/material';
import { Check } from '@mui/icons-material';
function MuiAlert() {
    const [state, setState] = useState(true);
  return (
    <Stack spacing={2} sx={{m: 4}}>
        {state && <Alert severity='info' onClose={()=>setState(false)}>This is info alert</Alert>}
        <Alert 
            severity='error'
            action={
                <Button color='inherit' onClick={()=> setState( state => !state )}> 
                    UNDO
                </Button>
            }
        >This is error alert</Alert>
        <Alert severity='warning'>This is warning alert</Alert>
        <Alert severity='success'>This is success alert</Alert>

        <Alert variant='outlined' severity='info'>This is info alert</Alert>
        <Alert 
            variant='outlined' 
            severity='error'
            action={
                <Button color='inherit' onClick={()=> setState( state => !state )}> 
                    UNDO
                </Button>
            }
        >This is error alert</Alert>
        <Alert variant='outlined' severity='warning'>This is warning alert</Alert>
        <Alert variant='outlined' severity='success'>This is success alert</Alert>

        <Alert 
            variant='filled' 
            severity='info'
            action={
                <Button color='inherit' onClick={()=> setState( state => !state )}> 
                    UNDO
                </Button>
            }
        >This is info alert</Alert>
        <Alert variant='filled' severity='error'>This is error alert</Alert>
        <Alert variant='filled' severity='warning'>This is warning alert</Alert>
        <Alert 
            variant='filled' 
            severity='success' 
            icon={<Check color='inherit' fontSize='inherit' />}
        >
            This is success alert
        </Alert>
    </Stack>
  )
}

export default MuiAlert