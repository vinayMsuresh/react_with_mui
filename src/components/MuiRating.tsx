import React from 'react'
import {Rating, Stack} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function MuiRating() {
    const [value, setValue] = React.useState<number | null>(null);
    const handleChange = ( 
        _e: React.ChangeEvent<{}>, 
        newValue: number | null
    ) => {
      setValue(newValue);
    }
    console.log(value);
  return (
    <Stack spacing={2}>
        <Rating 
            value={value} 
            precision={0.5} 
            onChange={handleChange}
            size='large'
            icon={<FavoriteIcon fontSize='inherit' color='error'/>}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
            readOnly
            highlightSelectedOnly
        />
    </Stack>
  )
}

export default MuiRating