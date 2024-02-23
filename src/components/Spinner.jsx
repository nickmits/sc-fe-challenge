import React from "react";
import { CircularProgress, Grid } from "@mui/material";

export default function Spinner() {
  return (
    <Grid data-testid='spinner' display='flex' justifyContent='center'>
      <CircularProgress role='progressbar' size={50} />
    </Grid>
  );
}
