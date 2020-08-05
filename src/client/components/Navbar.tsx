import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const TopNavbar: React.SFC = () => {
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar className='flex justify-between'>
        <div className='flex justify-around items-center-ns mh2'>
          <IconButton edge='start' color='inherit' aria-label='open drawer'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='primary'>
            Job Tracker
          </Typography>
        </div>
        <div className='flex justify-around items-center-ns mh2'>
          <IconButton edge='start' color='inherit' aria-label='open drawer'>
            <AddIcon />
          </IconButton>
          <IconButton edge='start' color='inherit' aria-label='open drawer'>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
