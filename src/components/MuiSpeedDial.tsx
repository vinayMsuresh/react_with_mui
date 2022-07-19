import React from 'react'
import {SpeedDial, SpeedDialAction, SpeedDialIcon} from '@mui/material';
import { Share, Print, FileCopyOutlined, Edit} from '@mui/icons-material';
function MuiSpeedDial() {
  return (
    <SpeedDial
    ariaLabel='speed dial'
    sx={{ position: 'absolute', bottom: 16, right: 16}}
    icon={<SpeedDialIcon openIcon={<Edit/>} />}
    >
        <SpeedDialAction icon={<FileCopyOutlined/>} tooltipTitle='copy' tooltipOpen />
        <SpeedDialAction icon={<Share/>} tooltipTitle='Share' />
        <SpeedDialAction icon={<Print/>} tooltipTitle='Print' />
    </SpeedDial>
  )
}

export default MuiSpeedDial