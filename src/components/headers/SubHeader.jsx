import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

export default function SubHeader() {
  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs aria-label="basic tabs example">
          <Tab label="Order" href="/admin/" />
          <Tab label="Menu" href="/admin/products" />
        </Tabs>
      </Box>
    </div>
  );
}
