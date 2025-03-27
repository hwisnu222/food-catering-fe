import React from "react";
import { Outlet } from "react-router";
import Header from "../headers/Header";
import Footer from "../footers/Footer";
import { Box } from "@mui/material";

export default function Layout() {
  return (
    <div>
      <Header />
      <Box minHeight="100vh">
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
}
