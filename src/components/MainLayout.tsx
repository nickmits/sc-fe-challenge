import React from "react";
import { ReactNode } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { MainContent } from "./styled";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 2,
      }}
    >
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

      <Box component='footer' sx={{ mt: 4, p: 2, textAlign: "center" }}>
        <Typography variant='body2' color='text.secondary'>
          challenge by{" "}
          <Link
            color='hsl(234, 12%, 34%)'
            target='_blank'
            href='https://www.speedcast.com/'
          >
            speedcast
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default MainLayout;
