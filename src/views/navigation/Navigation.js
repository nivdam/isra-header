import React from "react";

import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";

import {
  Toolbar,
  IconButton,
  MenuList,
  Link
} from "@mui/material";
import Typography from "@mui/material/Typography";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import HomeIcon from "@mui/icons-material/Menu";

import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/icons-material/List';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AirlineSeatLegroomExtraIcon from '@mui/icons-material/AirlineSeatLegroomExtra';
import BathtubIcon from '@mui/icons-material/Bathtub';

// import { Link, useLocation } from "react-router-dom";

import { useStyles } from "./NavigationStyling";

export default function Navigation(props) {
  const classes = useStyles();

  const [open, setDeskDrawOpen] = React.useState(true);
  const [mobileDrawerState, setmobileDrawerState] = React.useState(false);

  const handleMobileDrawerToggle = () => {
    mobileDrawerState === false
      ? setmobileDrawerState(true)
      : setmobileDrawerState(false);
  };

  const handleDesktopDrawerToggle = () => {
    open === false ? setDeskDrawOpen(true) : setDeskDrawOpen(false);
  };

  const renderNavItems = () => {
    return (
      <>
				<nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
      <Divider />
			
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

        <Divider />
      </>
    );
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className={classes.toggleDesktopMenuBtn}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDesktopDrawerToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
					
          <IconButton
            className={classes.toggleMobileMenuBtn}
            color="inherit"
            aria-label="open drawer"
            onClick={handleMobileDrawerToggle}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{ color: "white" }}>
            Hello World!
          </Typography>
        </Toolbar>
      </AppBar>


      <Drawer
        key="desktopDrawer"
        className={classes.desktopDrawer}
        variant="permanent"
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <Toolbar />
        <div className={classes.desktopDrawerContainer}>
          {renderNavItems("desktopNav")}
        </div>
      </Drawer>


      {/* Mobile drawer */}
      <Drawer
        key="mobileDrawer"
        anchor="left"
        open={mobileDrawerState}
        onClose={() => handleMobileDrawerToggle(false)}
      >
        <Toolbar>Toolbar text</Toolbar>
        {renderNavItems("desktopNav")}
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
}
