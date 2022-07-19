import React, {useState, useEffect} from 'react';
import { Stack, Skeleton, Typography, Box, Avatar} from '@mui/material';

function MuiSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=> setLoading(false), 3000);
  }, [])
  return (
    <Box width={250}>
      {loading?(
        <Skeleton 
          variant='rectangular' 
          animation='wave' 
          width={248} 
          height={126} 
        />
      ) : (
        <img 
          src='https://source.unsplash.com/random/248x126' 
          alt='skeleton' 
          width={248} 
          height={126} 
        />
      )}
      <Stack mt={2} width='100%' direction='row'>
        { loading ? (
          <Skeleton variant='circular' width={40} height={40} animation='wave' />
        ) : (
          <Avatar>VS</Avatar>
        )
        }
        <Stack width='80%' spacing={1}>
          { loading ? (
            <>
              <Typography variant='body1'>
                <Skeleton width='100%' animation='wave'/>
              </Typography>

              <Typography variant='body2'>
                <Skeleton width='100%' animation='wave'/>
              </Typography>
            </>
            
          ) : (
            <>
              <Typography variant='body1'>
                React MUI
              </Typography>
            </>
          )}
        </Stack>
      </Stack>

      

    </Box>
    // <Stack spacing={2} width='300px'>
    //     <Skeleton variant='text' animation={false}/>
    //     <Skeleton variant='circular' width={40} height={50} animation={false}/>
    //     <Skeleton variant='rectangular' width={250} height={120} animation={false}/>
    // </Stack>
  )
}

export default MuiSkeleton