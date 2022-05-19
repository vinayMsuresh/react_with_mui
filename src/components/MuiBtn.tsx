import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiBtn() {
    const [formats, setFormats] = useState<string[]>([]);
    const handleChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats);
    }
  return (
    <Stack spacing={4}>
        <Stack spacing={3} direction='row'>
            <Button variant='text'>Text</Button>
            <Button variant='contained' href='https://google.com'>contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>

        <Stack spacing={2} direction='row' >
            <Button variant='contained' color='success' size='small'>Button</Button>
        </Stack>

        <Stack spacing={3} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableElevation>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableRipple>Send</Button>
            <IconButton aria-label='send' color='secondary' size='large'>
                <SendIcon/>
            </IconButton>
        </Stack>

        <Stack spacing={2} direction='row'>
            <ButtonGroup variant='contained' size='large' color='success' orientation='vertical'>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup 
                aria-label='text formatting' 
                value={formats} 
                onChange={handleChange} 
                color='success'
            >
                <ToggleButton value='bold' aria-label='bold'>
                    <FormatBoldIcon/>
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic'>
                    <FormatItalicIcon/>
                </ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'>
                    <FormatUnderlinedIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>

    </Stack>
  )
}

export default MuiBtn