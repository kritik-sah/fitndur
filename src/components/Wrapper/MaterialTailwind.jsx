"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

const MaterialTailwind = (props) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};

export default MaterialTailwind;
