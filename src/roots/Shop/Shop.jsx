import React, { useState } from "react";
import { Box, Link, CssBaseline, AppBar, Toolbar } from "@mui/material";

import Categories from "../../components/categories/categories.component";

import "./shop.styles.scss";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [categ, setCateg] = useState("all");
  const navigateTo = useNavigate();
  const goToPageOnClick = (choice) => {
    setCateg(choice);
    navigateTo("/Shop/" + choice);
  };
  return (
    <>
      <Box className="Shopsubtitle">
        <CssBaseline />
        <AppBar
          // position="fix
          position="static"
          color="default"
          className="subnavbar"
          elevation={0}
        >
          <Toolbar className="_toolbar">
            <Link
              className="link"
              onClick={() => goToPageOnClick("all")}
              color="inherit"
              underline="hover"
            >
              All
            </Link>
            <Link
              className="link"
              onClick={() => goToPageOnClick("men")}
              color="inherit"
              underline="hover"
            >
              Men
            </Link>
            <Link
              className="link"
              onClick={() => goToPageOnClick("women")}
              color="inherit"
              underline="hover"
            >
              Women
            </Link>
            <Link
              className="link"
              onClick={() => goToPageOnClick("all")}
              color="inherit"
              underline="hover"
            >
              Jacketes
            </Link>
            <Link
              className="link"
              onClick={() => goToPageOnClick("all")}
              color="inherit"
              underline="hover"
            >
              Hats
            </Link>
            <Link
              className="link"
              onClick={() => goToPageOnClick("all")}
              color="inherit"
              underline="hover"
            >
              Pents
            </Link>
            <Link
              className="link"
              onClick={() => goToPageOnClick("all")}
              color="inherit"
              underline="hover"
            >
              Shoes
            </Link>
          </Toolbar>
        </AppBar>
      </Box>

      <Box className="shopWrapper">
        <Categories categ={categ} />
      </Box>
    </>
  );
};

export default Shop;
