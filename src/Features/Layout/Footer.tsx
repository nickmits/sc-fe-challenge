import { Box, Grid, Link, Typography } from "@mui/material";
import literals from "../../stubs/literals.json";

export const Footer = () => {
  return (
    <Grid display={"flex"} justifyContent={"center"} container>
      <Typography variant='body2' color='text.secondary'>
        {literals.sc_CHALLENGE}
        <Link
          color='hsl(234, 12%, 34%)'
          target='_blank'
          href='https://www.speedcast.com/'
        >
          {literals.sc_SPEEDCAST}
        </Link>
      </Typography>
    </Grid>
  );
};
