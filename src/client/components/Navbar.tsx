import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const TopNavbar: React.SFC = () => {
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar className='flex justify-center'>
        <Typography variant='h6' color='primary'>
          Job Tracker
        </Typography>
        Add a Job ; Daily Reminder ; Connections; Companies
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
