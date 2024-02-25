import { Grid, Typography } from "@mui/material";
import literals from "../../stubs/literals.json";

const Header = () => {
  return (
    <Grid justifyContent={"center"} container textAlign='center'>
      <Grid item xs={12}>
        <Typography
          sx={{ fontWeight: (theme) => theme.typography.fontWeightRegular }}
          variant='body1'
        >
          {literals.sc_HEADER_1}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
          variant='h6'
        >
          {literals.sc_HEADER_2}
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
          {literals.sc_HEADER_3}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
