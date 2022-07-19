import React from 'react'
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button} from '@mui/material';
function MuiCard() {
  return (
    <Box width='300px'>
        <Card>
            <CardContent>
                <CardMedia
                    height='140px'
                    component='img'
                    image='https://source.unsplash.com/random'
                    alt='unsplash image'
                />
                <Typography variant='h5' component='div'>React</Typography>
                <Typography variant='body2' component='div' color='text.secondary'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est saepe nam qui mollitia nemo fugit consequatur, molestiae eaque odio accusantium. Ex nisi rem quae excepturi consequuntur veritatis, quisquam aperiam veniam?
                </Typography>

                <CardActions>
                    <Button>Share</Button>
                    <Button>Learn more</Button>
                </CardActions>
            </CardContent>
        </Card>
    </Box>
  )
}

export default MuiCard