import React, { useState } from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AppBar, Button, IconButton, Toolbar, Typography, Stack, MenuItem, Menu } from '@mui/material'
const MuiNavBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    return(
        <div>
        <AppBar position="static">
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Stack direction='row'>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{mt: 1}}>
                    POKEMONAPP
                </Typography>
                </Stack>

                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button 
                        color='inherit'
                        id='resources'
                        onClick={handleClick}
                        aria-controls={ open ? 'menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={ open ? 'true' : undefined}
                        endIcon={<ExpandMoreIcon/>}
                    >
                        Resources</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu 
                    id='menu' 
                    anchorEl={anchorEl} 
                    open={open}
                    MenuListProps={{
                        'aria-labelledby': 'resources',
                    }}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>PodCast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default MuiNavBar;