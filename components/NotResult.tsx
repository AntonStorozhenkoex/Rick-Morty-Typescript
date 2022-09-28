import React, { FC } from "react";
import { Typography } from "@mui/material";

export const NotResult: FC = () => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        paddingTop: "80px",
        fontSize: 26,
        color: "common.notResultColor",
      }}
    >
      Sorry, but no results were found for your query
    </Typography>
  );
};
