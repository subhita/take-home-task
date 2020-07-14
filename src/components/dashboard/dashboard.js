import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./dashboard.css";
import Sider from "./../sider/sider";
import doctorImg from './../../Images/doctor-placeholder/doctor-placeholder.png';
import practiceIcon from './../../Images/practice/practice.png';
import paymentIcon from './../../Images/payment/payment.png';
import contractIcon from './../../Images/contract/contract.png';
import assignIcon from './../../Images/assign/assign.png';
import assetIcon from './../../Images/assets/assets.png';
import summaryIcon from './../../Images/summary/summary.png';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    backgroundCcolor: "#202020",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className="main-top">
        <div className="">
          <span>Alex Junior</span>
          <div>
            <a href="#">Logout</a>
          </div>
        </div>
        <div>
          <img
            src={doctorImg}
            class="Doctor-placeholder"
            alt=""
          ></img>
        </div>
      </div>
      <Divider />
      <List>
         <ListItem button>
          <ListItemIcon>
            <img src={practiceIcon} alt="Practice" />
          </ListItemIcon>
          <ListItemText primary="Practice" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <img src={paymentIcon} alt="Payment" />
          </ListItemIcon>
          <ListItemText primary="Payment" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
          <img src={contractIcon} alt="Contract" />
          </ListItemIcon>
          <ListItemText primary="Contract" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
          <img src={assetIcon} alt="Asset" />
          </ListItemIcon>
          <ListItemText primary="Asset" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
          <img src={assignIcon} alt="Assignment" />
          </ListItemIcon>
          <ListItemText primary="Assignment" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Downtown Clinic" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Overseas Clinic" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Wakanda Clinic" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
          <img src={summaryIcon} alt="Summary" />
          </ListItemIcon>
          <ListItemText primary="Summary" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="main-heading">
            <a href="#">back to users</a>
            <br />
            <Typography variant="h6" noWrap>
              Downtown Clinic
            </Typography>
            <Typography variant="subtitle1" gutterBottom className="sub-heading">
              1 Test Street Sydney NSW 2000 • ABC Pty Ltd
            </Typography>
          </div>
          <Button variant="contained">Proceed</Button>
        </Toolbar>
        <hr className="hrLine" />
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Sider />
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
