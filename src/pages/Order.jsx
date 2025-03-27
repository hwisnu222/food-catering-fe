import { useParams } from "react-router";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Card,
  Container,
  Typography,
  Stack,
  Grid,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { GET_DETAIL_MENU } from "../graphql/queries/menu.query";

const currentDate = new Date();
const INITIAL_STATE = {
  name: "",
  deliveryDate: currentDate,
  deliveryAddress: "",
  additionalNotes: "",
  phoneNumber: null,
};

export default function Order() {
  const { id } = useParams();
  const [form, setForm] = useState(INITIAL_STATE);

  const { data } = useQuery(GET_DETAIL_MENU, {
    variables: {
      id: id,
    },
  });

  // const [createOrder] = useMutation();

  const detail = data?.menuItem;
  const totalPrice = detail?.reduce((a, c) => a + Number(c.basePrice), 0);

  const handleChangeForm = (event) => {
    const target = event.target;

    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Order
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box component={Card} padding={3}>
            <Typography variant="h6" gutterBottom>
              Information
            </Typography>
            <Stack gap={2}>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChangeForm}
              />
              <Stack direction="row" gap={2}>
                <TextField
                  type="date"
                  label="Delivery Date"
                  fullWidth
                  name="deliveryDate"
                  value={form.deliveryDate}
                  onChange={handleChangeForm}
                />
                <TextField
                  type="number"
                  label="Phone Number"
                  fullWidth
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChangeForm}
                />
              </Stack>
              <TextField
                label="Delivery Address"
                multiline
                rows={3}
                name="deliveryAddress"
                value={form.deliveryAddress}
                onChange={handleChangeForm}
              />
              <TextField
                label="Additional Notes"
                multiline
                rows={5}
                name="additionalNotes"
                value={form.additionalNotes}
                onChange={handleChangeForm}
              />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box component={Card} padding={3}>
            <Typography variant="h6" gutterBottom>
              Detail Order
            </Typography>
            <Stack gap={1}>
              {detail?.map((item, index) => (
                <Stack
                  key={index}
                  justifyContent="space-between"
                  direction="row"
                  paddingY={2}
                >
                  <Typography>{item.name}</Typography>
                  <Typography>Rp {item.basePrice}</Typography>
                </Stack>
              ))}
              <Divider />
              <Stack
                justifyContent="space-between"
                direction="row"
                paddingY={2}
              >
                <Typography fontWeight={700}>Total</Typography>
                <Typography fontWeight={700}>Rp {totalPrice}</Typography>
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
