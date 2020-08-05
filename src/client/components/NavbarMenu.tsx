import {
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Tooltip,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = (add: boolean, icon: any): JSX.Element => {
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

  const menuLinks = add
    ? { Companies: '/companies', People: '/people', Jobs: '/jobs' }
    : { Companies: '/companies/new', People: '/people/new', Jobs: '/jobs/new' };

  const menuItems = Object.keys(menuLinks).map(item => (
    <Link to={menuLinks[item]}>
      <MenuItem autoFocus>{item}</MenuItem>
    </Link>
  ));

  const toolTitle = add ? 'View' : 'Add';
  return (
    <>
      <Tooltip title={toolTitle}>
        <IconButton
          edge='start'
          color='inherit'
          onClick={handleClick}
          onMouseOver={handleClick}
          onFocus={() => handleClick}
        >
          {icon}
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

export default NavMenu;
