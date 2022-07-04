import {Box} from '@mui/material';
function MuiLayout() {
  return (
    <>
    <Box 
        sx={{
            backgroundColor: 'secondary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            p: '18px',
            m: '10%',
            '&:hover': {
                backgroundColor:'secondary.light'
            }
        }}>
        MuiLayout</Box>
    <Box
        display='flex'
        bgcolor='secondary.main'
        p={3}
        height='100px'
        width='100px'
    >
        Mui Layout2
    </Box>
    </>
  )
}

export default MuiLayout