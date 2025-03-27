import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

export default function Tracking() {
  const theme = useTheme();
  return (
    <Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        bgcolor={theme.palette.primary.main}
      >
        <Typography variant="h3" className="text-white">
          Tracking Order
        </Typography>
        <TextField label="Tracking Code" />
      </Stack>
      <Container></Container>
    </Box>
  );
}
