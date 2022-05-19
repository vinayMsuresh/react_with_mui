import { Typography } from '@mui/material'
import React from 'react'

function Typo() {
  return (
    <div>
        <Typography variant='h1'>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3' gutterBottom>H3 Heading</Typography>
        <Typography variant='h4' component='h1'>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>
        <Typography variant='h6'>H6 Heading</Typography>

        <Typography variant='subtitle1'>sub Title 1</Typography>
        <Typography variant='subtitle2'>sub title 2</Typography>

        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore optio corporis, adipisci officia autem amet. Maxime, alias enim quibusdam et accusantium nesciunt sunt fugiat placeat animi reprehenderit incidunt iusto odit!</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, numquam vel cupiditate quas explicabo nemo ipsum, ipsam quo iste voluptate, quam natus at sequi quia. Temporibus exercitationem repudiandae quam consequatur?</Typography>
    </div>
  )
}

export default Typo