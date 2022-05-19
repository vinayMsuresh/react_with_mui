import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
function MuiSelect() {
    const [country, setCountry] = useState<string[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setCountry(typeof val === 'string'? val.split(','): val);
    }
  return (
    <Box width='250px'>
        <TextField 
            select 
            label='Select Country' 
            fullWidth
            onChange={handleChange}
            value={country}
            SelectProps={{multiple: true}}
        >
            <MenuItem value='In'>India</MenuItem>
            <MenuItem value='Us'>USA</MenuItem>
            <MenuItem value='Au'>Australia</MenuItem>
            <MenuItem value='Ch'>China</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect