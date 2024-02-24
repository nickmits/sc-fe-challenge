import { Box, Grid, SnackbarContent, Typography, styled } from "@mui/material";

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

export const StyledBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "GrayText",
});
