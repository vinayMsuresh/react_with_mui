import React from 'react'
import { Box, Breadcrumbs, Link, Typography} from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
function MuiBreadCrumb() {
  return (
    <Box m={3}>
        <Breadcrumbs aria-label='breadCrumb' maxItems={3} itemsBeforeCollapse={2} separator={<NavigateNext/>}>
            <Link underline='none' href='#'>Home</Link>
            <Link underline='none' href='#'>Accessories</Link>
            <Link underline='none' href='#'>Products</Link>
            <Typography color='text.primary' variant='body1'>Catalog</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadCrumb