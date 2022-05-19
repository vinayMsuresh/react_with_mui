import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React,{useState} from 'react'

function MuiRadio() {
  const [rbtn, setRbtn] = useState('');

  return (
    <Box width='250px'>
        <FormControl error>
            <FormLabel id='radio1'>
                No of years experience
            </FormLabel>
            <RadioGroup 
              name='radios' 
              aria-label='radio1'
              onChange={e=>{
                console.log(e.target.value);
                setRbtn(e.target.value)}}
              row
            >
                <FormControlLabel control={<Radio color='secondary' size='small'/>} value='0-2' label='0-2' />
                <FormControlLabel control={<Radio/>} value='3-5' label='3-5' />
                <FormControlLabel control={<Radio/>} value='6-10' label='6-10' />
            </RadioGroup>
            <FormHelperText>Please select a value</FormHelperText>           
        </FormControl>
    </Box>
  )
}

export default MuiRadio