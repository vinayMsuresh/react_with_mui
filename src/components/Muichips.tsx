import React, { useState } from 'react';
import { Stack, Chip, Avatar} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

function Muichips() {
    const [chips, setChips] = useState(['chip1', 'chip2', 'chip3']);

    const handleDelete = (chipToDel: string) => {
        setChips(chips.filter(chip=> chip!==chipToDel))
    }
  return (
    <Stack spacing={2} direction='row' sx={{mt:4}}>
        <Chip label='Chip' variant='filled' color='primary' icon={<FaceIcon/>}/>

        <Chip 
            label='Chip outlined' 
            variant='outlined' 
            color='secondary' 
            avatar={<Avatar>VK</Avatar>} 
        /> 

        {chips.map(chip=>(
            <Chip key={chip} label={chip} onClick={()=>alert('Clicked')} onDelete={()=>handleDelete(chip)} />
        ))}      

    </Stack>
  )
}

export default Muichips