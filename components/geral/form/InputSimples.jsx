import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function BasicTextFields() {
  return (
    <Box className='border-0' component="form" sx={{'& > :not(style)': { m: 0},}} noValidate autoComplete="off">
      
      <TextField className='w-full placeholder:text-slate-300' id="outlined-basic" label="Outlined" variant="outlined" />
      
    </Box>
  );
}