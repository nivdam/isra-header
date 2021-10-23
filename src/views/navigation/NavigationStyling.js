import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toggleDesktopMenuBtn: {
    marginRight: "3%",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  toggleMobileMenuBtn: {
    // marginRight: "3%",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  desktopDrawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    zIndex: 1, // necessary for nav to be below app bar
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  mobileDrawer: {
    width: 10,
    flexShrink: 0,
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
