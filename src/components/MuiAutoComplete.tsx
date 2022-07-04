import React from 'react'
import { Autocomplete, Stack, TextField } from '@mui/material';
type Opt = {
  id: number,
  label: string
};

function MuiAutoComplete() {
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];
  const [value, setValue] = React.useState<Opt | null>(null);

  return (
    <Stack spacing={2} sx={{m:10}}>
      <Autocomplete
      value={value}
        onChange={(event, newValue:Opt| null) => {
          setValue(newValue);
        }}
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </Stack>
  );
}

export default MuiAutoComplete