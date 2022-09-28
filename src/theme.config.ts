import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

export const theme = createTheme({
  palette: {
    common: {
      cardBgColor: "#0C7D85",
      cardBorderColor: "#CAE26A",
      notResultColor: "#fff",
      inputBgColor: "#407772",
    },
  },
});
