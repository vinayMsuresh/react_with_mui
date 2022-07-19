import {Box, Divider, Stack, Grid, Paper} from '@mui/material';
function MuiLayout() {
  return (
    <Paper sx={{p: 9, m:8}} elevation={4}>
    <Stack
        sx={{border: '1px solid', mt: 2}}
        spacing={2}
        direction='row'
        divider={<Divider orientation='vertical' flexItem />}    
    >
    <Box 
        sx={{
            backgroundColor: 'secondary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
                backgroundColor:'secondary.light'
            }
        }}>
        MuiLayout</Box>
    <Box
        bgcolor='secondary.main'
        height='100px'
        width='100px'
        p={2}
    >
        Mui Layout2
    </Box>
    </Stack>
    <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item lg={3} xs={6}>
            <Box bgcolor='primary.main' p={2}>Item1</Box>
        </Grid>
        <Grid item lg={3} xs={6}>
            <Box bgcolor='primary.main' p={2}> Item2</Box>
        </Grid>
        <Grid item lg={3} xs={6}>
            <Box bgcolor='primary.main' p={2}> Item3</Box>
        </Grid>
        <Grid item lg={3} xs={6}>
            <Box bgcolor='primary.main' p={2}> Item4</Box>
        </Grid>
    </Grid>
    
    </Paper>
  )
}

export default MuiLayout