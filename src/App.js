import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { alpha, darken, lighten } from "@mui/material/styles";

import Header from "./views/header/header.component";
import Navigation from "./views/navigation/Navigation";

export default function App() {
  return (
    <div className="App">
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: "primary.main",
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1)
        }}
      >
        h1. Heading
      </Typography>

      <Typography variant="h5" component="h2" sx={{ color: "secondary.main" }}>
        Start editing to see some magic happen!
      </Typography>

      <Header />
      <Navigation />
    </div>
  );
}
