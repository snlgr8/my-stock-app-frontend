import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { MenuItems } from './menuItems';
import { MenuContainer, OptionLink, ToolbarContainer } from './Header.styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <ToolbarContainer>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <MenuContainer>
          {MenuItems.map((value, index) => (
            <OptionLink key={index} to={value.link}>
              <Typography className={classes.title} variant='h6'>
                {value.title}
              </Typography>
            </OptionLink>
          ))}
        </MenuContainer>
      </ToolbarContainer>
    </AppBar>
  );
}
