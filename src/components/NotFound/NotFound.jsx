import React from "react";
import Navbar from "../NavBar/navBar";
import { Box, Card, CardContent } from "@mui/material";
function NotFound() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            fontSize: 35,
            fontWeight: 800,
            mt: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>this page Not Found</CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default NotFound;
