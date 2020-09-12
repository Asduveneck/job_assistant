import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import DropDown from './DropdownMenu';

const TopNavbar: React.SFC = () => {
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar className='flex justify-between'>
        <div className='flex justify-around items-center-ns mh2'>
          <DropDown variant='view' />
          <Typography variant='h6' color='primary'>
            Job Tracker
          </Typography>
        </div>
        <div className='flex justify-around items-center-ns mh2'>
          <DropDown variant='add' />
          <DropDown variant='user' />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
