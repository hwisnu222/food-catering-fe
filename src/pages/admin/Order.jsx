import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Order() {
  return (
    <Container>
      <Typography fontWeight={700} variant="h5" marginY={3}>
        Orders
      </Typography>
      <Box height="80vh" marginBottom={4}>
        <DataGrid columns={[]} rows={[]} />
      </Box>
    </Container>
  );
}
