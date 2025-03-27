import { Delete } from "@mui/icons-material";
import {
  Box,
  Card,
  Container,
  IconButton,
  Typography,
  Stack,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import React from "react";

export default function Order() {
  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Order
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Box component={Card} padding={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="start"
            >
              <Stack>
                <Typography variant="h5">title</Typography>
                <Typography variant="h6">Rp.1.000.000</Typography>
                <Typography>Total: 10 item</Typography>
              </Stack>
              <IconButton>
                <Delete />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box component={Card} padding={3}>
            <Typography fontWeight={700} variant="h6">
              Detail
            </Typography>
            <Stack gap={1}>
              <Stack
                justifyContent="space-between"
                direction="row"
                paddingY={2}
              >
                <Typography>Item</Typography>
                <Typography>Rp 1.000.000</Typography>
              </Stack>
              <Divider />
              <Stack
                justifyContent="space-between"
                direction="row"
                paddingY={2}
              >
                <Typography fontWeight={700}>Total</Typography>
                <Typography fontWeight={700}>Rp 1.000.000</Typography>
              </Stack>
            </Stack>

            <Button variant="contained" fullWidth>
              Purchase
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
