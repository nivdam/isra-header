import React from "react";

import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";

import CssBaseline from "@mui/material/CssBaseline";

import {
  Toolbar,
  IconButton,
  MenuIcon,
  MenuList,
  Divider,
  ListItemIcon,
  ListItemText,
  Link
} from "@mui/material";
import Typography from "@mui/material/Typography";

import HomeIcon from "@mui/icons-material/Menu";

import {
  AccessibleForwardIcon,
  AirlineSeatLegroomExtraIcon,
  BathtubIcon,
  MenuItem
} from "@mui/icons-material";

// import { Link, useLocation } from "react-router-dom";

import { useStyles } from "./NavigationStyling";

export default function Navigation(props) {
  const websiteTitle = "Hello World!";

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

  function renderNavItems(key) {
    return (
      <>
        <MenuList key={key}>
          <MenuItem component={Link} href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </MenuItem>
          <Divider />
          <MenuItem component={Link} href="/Page1">
            <ListItemIcon>
              <AccessibleForwardIcon />
            </ListItemIcon>
            <ListItemText primary="Lorem ipsum" />
          </MenuItem>
          <Divider />
          <MenuItem component={Link} href="/Page2">
            <ListItemIcon>
              <AirlineSeatLegroomExtraIcon />
            </ListItemIcon>
            <ListItemText primary="Cute Cat" />
          </MenuItem>
          <Divider />
          <MenuItem component={Link} href="/Page3">
            <ListItemIcon>
              <BathtubIcon />
            </ListItemIcon>
            <ListItemText primary="Not Found" />
          </MenuItem>
        </MenuList>
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
            {websiteTitle}
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
        <Toolbar>{websiteTitle}</Toolbar>
        {renderNavItems("desktopNav")}
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
}
