import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link, Outlet} from "react-router-dom";

export default function Header() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#214611' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Books
          </Typography>
          <Button color="inherit"><Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Home</Link></Button>
          <Button color="inherit"><Link to="form" style={{textDecoration: 'none', color: 'inherit'}}>Add new</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet />
    </>
  );
}