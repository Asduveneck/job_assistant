// @ts-nocheck

import {
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
} from '@material-ui/core';
import { AccountCircle, Add, Menu as MenuIcon } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

type DropdownOptions = 'add' | 'view' | 'user';
type NavMenuProps = {
  variant: DropdownOptions;
};

const DropDown = (dropdown: NavMenuProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  function handleKeyDown(event: React.KeyboardEvent): void {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const menuLinksAndTitle = (function dropdownSwitch(type) {
    switch (type.variant) {
      case 'add':
        return {
          menuLinks: {
            '/companies/new': 'Companies',
            '/people/new': 'People',
            '/jobs/new': 'Jobs',
          },
          title: 'Add',
        };
      case 'view':
        return {
          menuLinks: {
            '/companies': 'Companies',
            '/people': 'People',
            '/jobs': 'Jobs',
          },
          title: 'View',
        };
      default:
        return {
          menuLinks: {
            '/account/profile': 'Profile',
            '/account/settings': 'Account Settings',
          },
          title: 'User',
        };
    }
  })(dropdown);

  const { menuLinks } = menuLinksAndTitle;
  const menuItems = Object.keys(menuLinks).map(link => (
    <Link to={link} key={link}>
      <MenuItem autoFocus className='black'>
        {menuLinks[link]}
      </MenuItem>
    </Link>
  ));

  return (
    <>
      <Tooltip title={menuLinksAndTitle.title}>
        <IconButton
          edge='start'
          color='inherit'
          onClick={handleClick}
          onMouseOver={handleClick}
          onFocus={() => handleClick}
        >
          {dropdown.variant === 'view' && <MenuIcon />}
          {dropdown.variant === 'add' && <Add />}
          {dropdown.variant === 'user' && <AccountCircle />}
        </IconButton>
      </Tooltip>
      <Menu
        id='simple-menu'
        open={open}
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        className='bn'
        PaperProps={{ style: { marginTop: '50px', outline: 'none' } }}
      >
        <MenuList
          autoFocus
          autoFocusItem
          id='menu-list-grow'
          variant='selectedMenu'
          onKeyDown={handleKeyDown}
        >
          {menuItems}
        </MenuList>
      </Menu>
    </>
  );
};

export default DropDown;
