import { Stack, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

function MuiTextBox() {
    const [show, setShow] = useState<Boolean>(false);
    const [pass, setPass] = useState<String>('');
  return (
    <Stack direction='row' spacing='2'>
        <TextField 
            label='name' 
            type='text' 
            color='secondary'
            InputProps={{readOnly: true}}
        /> 


        <Stack direction='row'>
            <TextField
                label='Amount'
                InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}
            />
            <TextField
                label='Weight'
                InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>}}
            />
        </Stack>


        <Stack direction='row'>
            <TextField
                label='password'
                onChange={e=>e.target.value}
                type={show ? 'text' : 'password'}
                InputProps={{endAdornment: <InputAdornment position='end'><VisibilityIcon onClick={()=>setShow(!show)}/></InputAdornment>}}
            />
        </Stack>

    </Stack>
  )
}

export default MuiTextBox