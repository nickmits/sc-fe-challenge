import React from "react";
import { ReactNode } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { Footer } from "./Footer";
import { MainContent, MainLayoutContainer } from "../styled";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainLayoutContainer>
      <Grid container direction='column' textAlign='center'>
        <Typography variant='body1'>CSS, Javascript, API</Typography>
        <Typography variant='h5'>Contacts Application</Typography>
        <Typography variant='h6'>
          View basic info of contacts in a 3x2 layout. <br />
          Click on the magnifier icon to open a modal and view detailed contact
          info contact.
        </Typography>
      </Grid>
      <MainContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </MainContent>
      <Footer />
    </MainLayoutContainer>
  );
};

export default MainLayout;
