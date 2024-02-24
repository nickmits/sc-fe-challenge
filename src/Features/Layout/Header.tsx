import { Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid
      justifyContent={"center"}
      display='flex'
      container
      direction='column'
      textAlign='center'
    >
      <Typography
        sx={{ fontWeight: (theme) => theme.typography.fontWeightRegular }}
        variant='body1'
      >
        CSS, Javascript, API
      </Typography>
      <Typography
        sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
        variant='h6'
      >
        Contacts Application
      </Typography>
      <Typography
        sx={{
          alignSelf: "center",
          inlineSize: "420px",
          overflowWrap: "break-word",
          fontWeight: (theme) => theme.typography.fontWeightLight,
        }}
        variant='body2'
        color='text.secondary'
      >
        View basic info of contacts in a 3x2 layout. Click on the magnifier icon
        to open a modal and view detailed contact info contact.
      </Typography>
    </Grid>
  );
};

export default Header;
