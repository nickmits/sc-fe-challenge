import { Grid, Typography } from "@mui/material";

const Header = () => {
  return (
    <Grid justifyContent={"center"} container textAlign='center'>
      <Grid item xs={12}>
        <Typography
          sx={{ fontWeight: (theme) => theme.typography.fontWeightRegular }}
          variant='body1'
        >
          CSS, Javascript, API
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
          variant='h6'
        >
          Contacts Application
        </Typography>
      </Grid>
      <Grid
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        item
        xs={12}
      >
        <Typography
          sx={{
            alignSelf: "center",
            inlineSize: "430px",
            overflowWrap: "break-word",

            fontWeight: (theme) => theme.typography.fontWeightLight,
          }}
          variant='body2'
          color='text.secondary'
        >
          View basic info of contacts in a 3x2 layout. Click on the magnifier
          icon to open a modal and view detailed contact info contact.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
