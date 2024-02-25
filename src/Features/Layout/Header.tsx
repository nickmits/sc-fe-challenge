import { Grid } from "@mui/material";
import literals from "../../stubs/literals.json";
import {
  HeaderBody,
  TypographyBold,
  TypographyHeader,
  TypographyRegular,
} from "../styled";

const Header = () => {
  return (
    <Grid justifyContent={"center"} container textAlign='center'>
      <Grid item xs={12}>
        <TypographyRegular variant='body1'>
          {literals.sc_HEADER_1}
        </TypographyRegular>
      </Grid>
      <Grid item xs={12}>
        <TypographyBold variant='h6'>{literals.sc_HEADER_2}</TypographyBold>
      </Grid>
      <HeaderBody item xs={12}>
        <TypographyHeader variant='body2' color='text.secondary'>
          {literals.sc_HEADER_3}
        </TypographyHeader>
      </HeaderBody>
    </Grid>
  );
};

export default Header;
