import { useState } from "react";

export const useContextCards = () => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const cardsState = {
    openSnackbar,
    setOpenSnackbar,
    errorMessage,
    setErrorMessage,
  };

  return cardsState;
};
