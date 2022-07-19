import React from 'react'
import {
    Box, 
    List, 
    ListItem,
    ListItemAvatar, 
    ListItemText, 
    ListItemButton,
    ListItemIcon,
    Divider,
    Avatar
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail'
function MuiList() {
  return (
    <Box sx={{m: 4, width: '20%', bgcolor: 'lightgray'}}>
        <List>            
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>                
                    <ListItemText primary='List item1' />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>                
                <ListItemText primary='List item2' />
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon/>
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>                
                <ListItemText primary='List item3' />
            </ListItem>
        </List>
    </Box>
  )
}

export default MuiList