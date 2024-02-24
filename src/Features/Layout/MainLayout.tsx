import React from "react";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import Header from "./Header";
import { Grid } from "@mui/material";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Grid
      minHeight={"95vh"}
      alignItems={"center"}
      display={"flex"}
      justifyContent='center'
      container
      sx={{ backgroundColor: (theme) => theme.palette.background.default }}
    >
      <Header />
      <Grid display={"flex"} justifyContent={"center"} container>
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
};

export default MainLayout;
