import React from 'react';
import { Accordion, AccordionSummary, Box, Paper, Typography, AccordionDetails} from '@mui/material';
import { Masonry } from '@mui/lab';
import ExpandMore from '@mui/icons-material/ExpandMore';

function MuiMasonry() {
    const heights = [150, 90, 40, 120, 45, 120, 32, 67, 90, 112, 34, 56, 89];
  return (
    <Box width='50%' height='30%' mt={3}>
        <Masonry>
            {heights.map((height, index) => (
                <Paper 
                    key={index} 
                    sx={{ 
                        // display: 'flex', 
                        // justifyContent: 'center', 
                        // alignItems: 'center', 
                        // height, 
                        border: '1px solid'}}
                >
                    <Accordion sx={{minHeight: height}}>
                        <AccordionSummary expandIcon={<ExpandMore/>}>
                            <Typography>{index + 1}</Typography>
                        </AccordionSummary>

                        <AccordionDetails>content</AccordionDetails>
                    </Accordion>
                </Paper>
            ))}
        </Masonry>
    </Box>
  )
}

export default MuiMasonry