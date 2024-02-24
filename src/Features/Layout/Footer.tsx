import { Box, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
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
  );
};
