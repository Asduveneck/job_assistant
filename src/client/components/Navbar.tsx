import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, Add, Menu } from '@material-ui/icons';
import React from 'react';

import NavMenu from './NavbarMenu';

const TopNavbar: React.SFC = () => {
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar className='flex justify-between'>
        <div className='flex justify-around items-center-ns mh2'>
          <IconButton edge='start' color='inherit' aria-label='open drawer'>
            <Menu />
          </IconButton>
          <Typography variant='h6' color='primary'>
            Job Tracker
          </Typography>
        </div>
        <div className='flex justify-around items-center-ns mh2'>
          <IconButton edge='start' color='inherit' aria-label='open drawer'>
            <Add />
          </IconButton>
          <IconButton edge='start' color='inherit' aria-label='open drawer'>
            <AccountCircle />
          </IconButton>
          <NavMenu add icon={<Add />} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
