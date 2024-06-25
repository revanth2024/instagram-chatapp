import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore, MdSlowMotionVideo, MdLogout } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";
import { VscHeart } from "react-icons/vsc";
import { CgAddR } from "react-icons/cg";
import { FaThreads } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonAdd } from "react-icons/io5";
import profileImg from "./assets/images/profile.png";
import Message from "./Message";
import Checkbox from "@mui/material/Checkbox";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./App.css";

import lightimage from "./assets/images/instalogo.png";
import darkimage from "./assets/images/insta-dark.png";

const drawerWidth = 256;

function Appbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [opendropdown, setOpendropdown] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleClose = () => setOpendropdown(false);

  const [show, setShow] = useState(false);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const profileclose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <div className="sidebar-width">
      <div className="sidebar-alignment">
        <div className="sidebar-logo">
          <img src={props.isDarkTheme ? lightimage : darkimage} alt="logo" className="main-logo" />
        </div>
        <div className="sidebar-content">
          <span className="sidebar-icon">
            <GoHomeFill />
          </span>
          <span className="activepage">Home</span>
        </div>
        <div className="sidebar-content">
          <span className="sidebar-icon">
            <FiSearch />
          </span>
          <span>Search</span>
        </div>
        <div className="sidebar-content">
          <span className="sidebar-icon">
            <MdOutlineExplore />
          </span>
          <span>Explore</span>
        </div>
        <div className="sidebar-content">
          <span className="sidebar-icon">
            <BiMessageRoundedDots />
          </span>
          <span>Messages</span>
        </div>
        <div className="sidebar-content">
          <span className="sidebar-icon">
            <MdSlowMotionVideo />
          </span>
          <span>Reels</span>
        </div>
        <div className="sidebar-content">
          <span className="sidebar-icon">
            <VscHeart />
          </span>
          <span>Notifications</span>
        </div>
        <div className="sidebar-content">
          <span className="sidebar-icon">
            <CgAddR />
          </span>
          <span>Create</span>
        </div>
        <div
          className="sidebar-content"
          onClick={() => setOpendropdown((prev) => !prev)}
        >
          <span className="sidebar-icon profile-icon">
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="profile"
                src={profileImg}
                sx={{ width: 30, height: 30 }}
              />
            </Stack>
          </span>
          <span>Profile</span>
        </div>
        {opendropdown && (
          <div className="dropdown-list" onClose={handleClose}>
            <ul>
              <li>
                <IoPersonAdd />
                Add account
              </li>
              <li>
                <MdLogout />
                Log out
              </li>
            </ul>
          </div>
        )}
        <div className="sidebar-footer">
          <div className="sidebar-content">
            <span className="sidebar-icon">
              <FaThreads />
            </span>
            <span>Threads</span>
          </div>
          <div className="sidebar-content">
            <span className="sidebar-icon">
              <GiHamburgerMenu />
            </span>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="responsive-appbar"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "var(--mainbg-color)",
          display: { lg: "none", xs: "block", md: "block" },
        }}
      >
        <Toolbar className="responsive-header">
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: "block" },
              color: "var(--span-color)",
              fontWeight: "bold",
              fontSize: 32,
            }}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>

          <Message show={show} setShow={setShow}></Message>
          <Checkbox
            icon={
              <NotificationsNoneIcon
                sx={{ color: "var(--span-color)", fontSize: 31 }}
              />
            }
            checkedIcon={
              <NotificationsActiveIcon
                sx={{ color: "var(--span-color)", fontSize: 31 }}
              />
            }
          />
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="black"
                style={{ padding: 0 }}
              >
                <img
                  src={require("./assets/images/profile.png")}
                  alt="profile"
                  fluid
                  className="profile"
                ></img>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={profileclose}
              >
                <MenuItem onClick={profileclose} style={{ color: "black" }}>
                  Profile
                </MenuItem>
                <MenuItem onClick={profileclose} style={{ color: "black" }}>
                  My account
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={props.container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "block",
              lg: "none",
              xl: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          container={props.container}
          variant="permanent"
          open
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

Appbar.propTypes = {
  window: PropTypes.func,
};

export default Appbar;
