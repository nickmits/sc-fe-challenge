import { Grid, SnackbarContent, styled } from "@mui/material";

export const MainContent = styled(Grid)({
  height: "70vh",
});

export const StyledSnackbarContent = styled(SnackbarContent)({
  backgroundColor: "bisque",
  textAlign: "center",
  display: "flex",
  color: "black",
  justifyContent: "center",
});
