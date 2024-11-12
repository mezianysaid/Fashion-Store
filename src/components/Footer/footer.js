import React from "react";

import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Box sx={{ color: "white", p: 4 }}>
        <Grid container spacing={4} className="footerwrapper">
          {/* About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom className="footerAbout">
              About Us
            </Typography>
            <Typography variant="body2" className="footerAbout">
              We are a fashion store dedicated to bringing you the latest trends
              in clothing and accessories.
            </Typography>
          </Grid>

          {/* Customer Service Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom className="footerStyle">
              Customer Service
            </Typography>
            <Link
              href="#"
              color="inherit"
              underline="hover"
              className="footerStyle"
            >
              Contact Us
            </Link>
            <br />
            <Link
              href="#"
              color="inherit"
              underline="hover"
              className="footerStyle"
            >
              Returns & Exchanges
            </Link>
            <br />
            <Link
              href="#"
              color="inherit"
              underline="hover"
              className="footerStyle"
            >
              Shipping Info
            </Link>
          </Grid>

          {/* Shop Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom className="footerStyle">
              Shop
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Men’s Fashion
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Women’s Fashion
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Kids’ Fashion
            </Link>
          </Grid>

          {/* Follow Us Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom className="footerStyle">
              Follow Us
            </Typography>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>
        {/* Copyright Section */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" className="footerStyle">
            &copy; {new Date().getFullYear()} Fashion Store. All rights
            reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
