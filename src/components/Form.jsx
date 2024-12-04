import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {useState} from "react";

export default function Form() {
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState(0);

    const handleChange = (event) => {
        setGenre(event.target.value);
    };
    return (
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch', marginInline: 'auto', width: '300px'} }}
      noValidate
      autoComplete="off"
    >   
    <Stack direction="column" spacing={2} sx={{
          justifyContent: "space-evenly",
          margin: "20px 0px"
        }}>
        <Typography gutterBottom variant="h4" sx={{ fontWeight: 'bold', marginTop: '20px'}} component="div">
            Add a book
          </Typography>
      <TextField fullWidth id="outlined-basic" label="Title" variant="outlined" />
      <TextField fullWidth id="outlined-basic" label="Author" variant="outlined" />
      <TextField fullWidth id="outlined-basic" label="Image (url)" variant="outlined" />
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Genre</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={genre}
          label="Genre"
          onChange={handleChange}
        >
          <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
          <MenuItem value={'Adventure'}>Adventure</MenuItem>
          <MenuItem value={'Biography'}>Biography</MenuItem>
          <MenuItem value={'Business'}>Business</MenuItem>
          <MenuItem value={'Science Fiction'}>Science Fiction</MenuItem>
          <MenuItem value={'Dystopian'}>Dystopian</MenuItem>
          <MenuItem value={'Non-Fiction'}>Non-Fiction</MenuItem>
        </Select>
        </FormControl>
        <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Completed" />
        </FormGroup>
        <TextField fullWidth id="outlined-basic" label="Started" variant="outlined" />
        <TextField fullWidth id="outlined-basic" label="Finished" variant="outlined" />
        <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
        <Button variant="contained" sx={{backgroundColor: '#214611'}}>Add new</Button>
        </Stack>
    </Box>
    )
}