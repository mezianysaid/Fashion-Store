import React from "react";
import Button from "@mui/material/Button";
import "./heroSection.scss";
import { Box } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="heroTitle">Find Your Unique Style</h1>
        <Box>
          <p className="disscription">
            Discover the latest trends in fashion and shop with confidence.
          </p>
        </Box>
        <Button variant="contained" color="primary" className="shop-now">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
