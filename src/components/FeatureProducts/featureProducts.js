import React from "react";
import {
  Grid,
  Card,
  Typography,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import "./featureProducts.scss";
import productsList from "../../assets/data";
const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <Grid container spacing={1}>
        {productsList.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} mb={2}>
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
              {/* <div class="product-image">
                <img src={item.img} alt="Product Image" />
              </div> */}
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
                  <Typography variant="h5" className="product-title">
                    {" "}
                  </Typography>

                  <Button variant="outlined" className="btnBuy">
                    Buy Now
                  </Button>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default FeaturedProducts;
