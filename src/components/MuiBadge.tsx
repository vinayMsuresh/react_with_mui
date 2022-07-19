import React from 'react'
import { Badge, Stack} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

function MuiBadge() {
    const [value, setValue] = React.useState(0);
  return (
    <Stack spacing={4} direction='row' sx={{mt: 4}}>
        <Badge badgeContent={4} color='primary'>
            <MailIcon/>
        </Badge>

        <Badge badgeContent={47} color='secondary'>
            <MailIcon/>
        </Badge>

        <Badge badgeContent={112} color='success' max={999}>
            <MailIcon/>
        </Badge>

        <Badge badgeContent={0} color='success' showZero>
            <MailIcon/>
        </Badge>

        <Badge variant='dot' color='success' invisible={value <= 0 }>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}

export default MuiBadge