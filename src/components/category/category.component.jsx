import React from "react";

import { Grid, Card, Button, CardActions, Box } from "@mui/material";

import "./category.style.scss";
const Category = ({ item }) => {
  return (
    <section className="categoryContainer">
      <Card
        className="product-card"
        sx={{
          height: 400,
          width: "100%",
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <CardActions
          className="cardContent"
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "16px",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              padding: "8px",
            }}
          >
            <Button variant="outlined" className="btnBuy">
              Add To Card
            </Button>
          </Box>
        </CardActions>
      </Card>
    </section>
  );
};

export default Category;
