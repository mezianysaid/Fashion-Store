// import { CssBaseline, Box } from "@mui/material";
import React from "react";
import { Grid, Card, Button, CardActions, Box } from "@mui/material";
import { useState, Suspense } from "react";
import productsList from "../../assets/data";
const Category = React.lazy(() => import("../category/category.component"));
export default function Categories({ categ }) {
  return (
    <>
      <Suspense fallback={<div>Loading... </div>}>
        {/* <CssBaseline /> */}
        <Grid container spacing={1}>
          {productsList
            .filter((item) => {
              if (categ != "all") {
                return item ? item.category === categ : item;
              } else return item;
            })
            .map((item, index) => (
              <Grid item xs={12} sm={6} md={3} lg={3} mb={2}>
                <Category key={index} item={item} />
              </Grid>
            ))}
        </Grid>
      </Suspense>
    </>
  );
}
