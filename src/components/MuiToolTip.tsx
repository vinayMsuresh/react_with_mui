import React from 'react'
import {IconButton, Tooltip} from '@mui/material';
import { Delete } from '@mui/icons-material';
function MuiToolTip() {
  return (
    <Tooltip 
        title='delete' 
        placement='right' 
        arrow 
        enterDelay={500} 
        leaveDelay={200}
        >
        <IconButton>
            <Delete/>
        </IconButton>
    </Tooltip>
  )
}

export default MuiToolTip