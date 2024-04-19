import { Box, Button, FormControl, TextField, styled } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import Stack from '@mui/material/Stack';
import DateDebt from '../DateDebt/DateDebt';

const AddDebt = () => {

  const [input, setInput] = useState<string>('')

  const handleSubmit = (event: any) => {

    event.preventDefault()

    if (input === '') return
    console.log(input)
    setInput('')
  }

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });




  return (
    <Box>
      <FormControl 
        sx={{ flexDirection: 'row', gap: '.5rem'}}
        onBlur={handleSubmit}
        
      >
        <Box>
        <TextField
          id="outlined-basic"
          label="New Debt"
          variant="outlined"
          fullWidth
          onChange={(e: ChangeEvent<HTMLInputElement>) => { setInput(e.target.value) }}
        />

        <DateDebt/>
        </Box>

        <Stack spacing={2} direction="row">

          <BootstrapButton
            variant="contained"
            disableRipple
            type='submit'
          >
            Add
          </BootstrapButton>
        </Stack>

      </FormControl>
    </Box>
  )


}




export default AddDebt