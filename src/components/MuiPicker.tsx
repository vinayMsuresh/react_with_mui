import React, {useState} from 'react'
import { Stack, TextField, Box } from '@mui/material';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';
import { DesktopDateRangePicker, DateRange } from '@mui/x-date-pickers-pro';
function MuiPicker() {
    const [date,setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<Date | null>(null);
    const [dateTime, setDateTime] = useState<Date | null>(null);
    const [value, setValue] = useState<DateRange<Date>>([null, null]);
    console.log({value})
  return (
    <Stack spacing={2} direction='row' mt={2}>
        <DatePicker 
            label='Date picker' 
            renderInput={(props) => <TextField {...props} />} 
            value={date}
            onChange={(newValue) => setDate(newValue)}
        />

        <TimePicker 
            label='Time picker' 
            renderInput={(props) => <TextField {...props} />} 
            value={time}
            onChange={(newValue) => setTime(newValue)}
        />

        <DateTimePicker 
            label='Date Time picker' 
            renderInput={(props) => <TextField {...props} />} 
            value={dateTime}
            onChange={(newValue) => setDateTime(newValue)}
        />

        <DesktopDateRangePicker
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
            <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
            </React.Fragment>
            )}
        />
    </Stack>
  )
}

export default MuiPicker