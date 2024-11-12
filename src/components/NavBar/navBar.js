import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import "./navBar.scss";

const drawerWidth = 240;
const routingList = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Shop",
    link: "/Shop",
  },
  {
    name: "Contact",
    link: "/Contact",
  },
];
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="drawerWrapper">
      <Toolbar />
      <Divider />
      <List>
        {routingList.map((item, index) => (
          <ListItem
            button
            key={item.name}
            className="drawerLink"
            component="link"
            to={item.name}
          >
            <ListItemText>{item.name}</ListItemText>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar
        // position="fixed"
        sx={
          {
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
            // ml: { sm: `${drawerWidth}px` },
            // borderBottomLeftRadius: 50,
          }
        }
        position="static"
        color="default"
        className="navbar"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            FashionStore
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Link className="link" href="/" color="inherit" underline="hover">
              Home
            </Link>
            <Link
              className="link"
              href="/Shop/all"
              color="inherit"
              underline="hover"
            >
              Shop
            </Link>
            <Link className="link" href="/" color="inherit" underline="hover">
              About
            </Link>
            <Link className="link" href="/" color="inherit" underline="hover">
              Contact
            </Link>
            <IconButton
              variant="contained"
              sx={{
                color: "black",
              }}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          // ModalProps={{
          //   keepMounted: true,
          // }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
