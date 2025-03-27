import { useNavigate, useParams } from "react-router";
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
import { CREATE_ORDER } from "../graphql/mutations/order.mutation";
import { currencyFormat } from "../utils/currency";
import useForm from "../hooks/useForm";

const currentDate = new Date();
const INITIAL_STATE = {
  name: "",
  deliveryDate: currentDate,
  deliveryAddress: "",
  specialNotes: "",
  phoneNumber: null,
};

export default function Order() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [form, setForm] = useState(INITIAL_STATE);
  const { errors, handleSubmit } = useForm({
    name: form.name,
    deliveryDate: form.deliveryDate,
    deliveryAddress: form.deliveryAddress,
    phoneNumber: form.phoneNumber,
  });

  const { data } = useQuery(GET_DETAIL_MENU, {
    variables: {
      id: id,
    },
  });

  const [createOrder, { loading }] = useMutation(CREATE_ORDER, {
    onCompleted: (data) => {
      navigate(`/status-order/${data.createOrder.order.id}`);
    },
  });

  const detail = data?.menuItem;
  const totalPrice = detail?.reduce((a, c) => a + Number(c.basePrice), 0);

  const handleChangeForm = (event) => {
    const target = event.target;

    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = () => {
    form.menuItemId = id;
    createOrder({
      variables: {
        data: form,
      },
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
                helperText={errors.name}
                error={errors.name}
              />
              <Stack direction="row" gap={2}>
                <TextField
                  type="date"
                  label="Delivery Date"
                  fullWidth
                  name="deliveryDate"
                  defaultValue={form.deliveryDate}
                  value={form.deliveryDate}
                  onChange={handleChangeForm}
                  helperText={errors.deliveryDate}
                  error={errors.deliveryDate}
                />
                <TextField
                  type="number"
                  label="Phone Number"
                  fullWidth
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChangeForm}
                  helperText={errors.phoneNumber}
                  error={errors.phoneNumber}
                />
              </Stack>
              <TextField
                label="Delivery Address"
                multiline
                rows={3}
                name="deliveryAddress"
                value={form.deliveryAddress}
                onChange={handleChangeForm}
                helperText={errors.deliveryAddress}
                error={errors.deliveryAddress}
              />
              <TextField
                label="Additional Notes"
                multiline
                rows={5}
                name="specialNotes"
                value={form.specialNotes}
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
                  <Typography>{currencyFormat(item.basePrice)}</Typography>
                </Stack>
              ))}
              <Divider />
              <Stack
                justifyContent="space-between"
                direction="row"
                paddingY={2}
              >
                <Typography fontWeight={700}>Total</Typography>
                <Typography fontWeight={700}>
                  {currencyFormat(totalPrice)}
                </Typography>
              </Stack>
            </Stack>

            <Button
              variant="contained"
              fullWidth
              loading={loading}
              onClick={() => handleSubmit(handleSubmitForm)}
            >
              Purchase
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
