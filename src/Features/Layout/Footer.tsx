import { Box, Grid, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Grid display={"flex"} justifyContent={"center"} container>
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
    </Grid>
  );
};
