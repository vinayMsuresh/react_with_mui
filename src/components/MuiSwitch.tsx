import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

function MuiSwitch() {
    const [status, setStatus] = useState(false);
    console.log({status})
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.checked);
    }
  return (
    <Box>
        <FormControlLabel 
            control={<Switch
                checked={status}
                onChange={handleChange} 
            />} 
            label='dark mode' 
        />
    </Box>
  )
}

export default MuiSwitch