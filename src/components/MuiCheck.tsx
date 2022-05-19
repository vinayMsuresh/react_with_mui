import { Bookmark, BookmarkBorder, CheckBox } from '@mui/icons-material';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material'
import React from 'react'

function MuiCheck() {
    const [terms, setTerms] = React.useState(false);
    const [skills, setSkills] = React.useState<string[]>([]);
    console.log(skills);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let index = skills.indexOf(e.target.value);
        if(index === -1){
            setSkills([...skills, e.target.value]);
        }
        else{
            setSkills(skills=> skills.filter(skill=> skill!== e.target.value));
        }
    }
  return (
    <Box>
        <Box>
            <FormControlLabel 
                control={<Checkbox checked={terms} onChange={e=>setTerms(e.target.checked)} />}
                label='Please accept the terms and conditions'
            />
        </Box>
        <Box>
            <Checkbox 
                icon={<BookmarkBorder/>} 
                checkedIcon={<Bookmark />} 
                checked={terms}
                onChange={e=>setTerms(e.target.checked)} />
        </Box>

        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>
                <FormGroup>
                    <FormControlLabel 
                        control={<Checkbox
                            value='html'
                            onChange={handleChange}
                            />} 
                        label='html' 
                    />
                    <FormControlLabel 
                        control={<Checkbox
                            value='CSS'
                            onChange={handleChange}
                            />} 
                        label='CSS' 
                    />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheck