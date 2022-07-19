import React from 'react'
import { Accordion, AccordionSummary,AccordionDetails, Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function MuiAccordian() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (isExpanded: boolean, panel:string) => {
        setExpanded(isExpanded ? panel : false);
    }

  return (
    <div>
        <Accordion 
            expanded={expanded === 'panel1'} 
            onChange={(event, isExpanded)=>handleChange(isExpanded, 'panel1')}
        >
            <AccordionSummary id='panel-1' aria-controls='panel-1' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel officia placeat in magni 
                cupiditate inventore, illo nostrum 
                odio aspernatur beatae nihil accusamus cumque blanditiis aut dolorum laudantium 
                iste excepturi corporis.
            </AccordionDetails>
        </Accordion>

        <Accordion 
            expanded={expanded === 'panel2'} 
            onChange={(event, isExpanded)=>handleChange(isExpanded, 'panel2')}
        >
            <AccordionSummary id='panel-2' aria-controls='panel-2' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel officia placeat in magni 
                cupiditate inventore, illo nostrum 
                odio aspernatur beatae nihil accusamus cumque blanditiis aut dolorum laudantium 
                iste excepturi corporis.
            </AccordionDetails>
        </Accordion>


        <Accordion 
            expanded={expanded === 'panel3'} 
            onChange={(event, isExpanded)=>handleChange(isExpanded, 'panel3')}
        >
            <AccordionSummary id='panel-3' aria-controls='panel-3' expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel officia placeat in magni 
                cupiditate inventore, illo nostrum 
                odio aspernatur beatae nihil accusamus cumque blanditiis aut dolorum laudantium 
                iste excepturi corporis.
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordian