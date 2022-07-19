import React from 'react'
import { 
    Table, 
    TableContainer, 
    TableRow, 
    TableHead, 
    TableBody, 
    TableCell,
    Paper,
    } from '@mui/material';
function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '350px'}}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='center'>Email</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {tableData.map(row=>(
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align='center'>{row.email}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MuiTable

const tableData = [{
    "id": 1,
    "first_name": "Ciel",
    "last_name": "Josephy",
    "email": "cjosephy0@cam.ac.uk",
    "gender": "Female",
    "ip_address": "159.156.90.94"
  }, {
    "id": 2,
    "first_name": "Ernesta",
    "last_name": "Pemberton",
    "email": "epemberton1@redcross.org",
    "gender": "Female",
    "ip_address": "104.216.136.34"
  }, {
    "id": 3,
    "first_name": "Minerva",
    "last_name": "Coite",
    "email": "mcoite2@imgur.com",
    "gender": "Female",
    "ip_address": "88.231.153.142"
  }, {
    "id": 4,
    "first_name": "Christie",
    "last_name": "Chancelier",
    "email": "cchancelier3@dmoz.org",
    "gender": "Male",
    "ip_address": "36.74.187.139"
  }, {
    "id": 5,
    "first_name": "Norri",
    "last_name": "Wardingly",
    "email": "nwardingly4@angelfire.com",
    "gender": "Female",
    "ip_address": "220.82.237.104"
  }, {
    "id": 6,
    "first_name": "Riccardo",
    "last_name": "Clampin",
    "email": "rclampin5@dot.gov",
    "gender": "Male",
    "ip_address": "60.101.31.224"
  }, {
    "id": 7,
    "first_name": "Hilary",
    "last_name": "Kale",
    "email": "hkale6@yahoo.com",
    "gender": "Male",
    "ip_address": "242.184.209.69"
  }, {
    "id": 8,
    "first_name": "Alastair",
    "last_name": "Prahm",
    "email": "aprahm7@ovh.net",
    "gender": "Male",
    "ip_address": "34.234.251.219"
  }, {
    "id": 9,
    "first_name": "Enos",
    "last_name": "Tilzey",
    "email": "etilzey8@craigslist.org",
    "gender": "Male",
    "ip_address": "223.106.135.208"
  }, {
    "id": 10,
    "first_name": "Caro",
    "last_name": "Shilburne",
    "email": "cshilburne9@addtoany.com",
    "gender": "Female",
    "ip_address": "55.94.98.222"
  }];  