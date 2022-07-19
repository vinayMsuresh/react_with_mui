import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ProfileIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MuiBottomNav() {
    const [value, setValue] = React.useState(0)
  return (
    <BottomNavigation 
        sx={{width: '100%', position: 'absolute', bottom:0}}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
    >
        <BottomNavigationAction icon={<HomeIcon/>} label='Home' />
        <BottomNavigationAction icon={<ProfileIcon/>} label='Profile' />
        <BottomNavigationAction icon={<FavoriteIcon/>} label='Favourite' />
    </BottomNavigation>
  )
}

export default MuiBottomNav