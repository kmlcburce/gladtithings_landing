import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import '../common/Style.css'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='header' elevation={0}>
        <Toolbar>
          <img src={require('../assets/logo.png')} className="navImg"></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <section>
            <Button className='nav'>About</Button>
            <Button className='nav'>Contact</Button>
            <Button className='roundedBtn' color='inherit'>Donate</Button>
          </section>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header