import React from 'react';
import { Avatar, Stack, AvatarGroup} from '@mui/material'

function MuiAvatar() {
  return (
    <Stack spacing={4}>
        <Stack spacing={1} direction='row'>
            <Avatar sx={{bgcolor: 'primary.light'}}>Rk</Avatar>
            <Avatar sx={{bgcolor: 'success.light'}}>Mo</Avatar>
        </Stack>

        <Stack spacing={1} direction='row'>
            <AvatarGroup max={3}>
                <Avatar src='https://randomuser.me/api/portraits/men/18.jpg' />
                <Avatar sx={{bgcolor: 'success.light'}}>Mo</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/men/19.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/17.jpg' />
            </AvatarGroup>
        </Stack>
    </Stack>
  )
}

export default MuiAvatar