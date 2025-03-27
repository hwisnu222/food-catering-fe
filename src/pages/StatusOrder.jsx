import { useQuery } from "@apollo/client";
import {
  Box,
  Card,
  Chip,
  Container,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router";
import { GET_ORDER } from "../graphql/queries/orders.query";
import { STATUS } from "../constants/status.constant";
import { DateUtility } from "../utils/date";

const steps = Object.values(STATUS);

export default function StatusOrder() {
  const { id } = useParams();

  const { data } = useQuery(GET_ORDER, {
    variables: {
      id: id,
    },
  });

  const detail = data?.order[0];
  const step = Object.keys(STATUS).indexOf(detail?.status);
  console.log(step);
  return (
    <Box>
      <Container component={Card} padding={2}>
        <Box paddingY={3}>
          <Stack>
            <Typography fontWeight={700} variant="h6" gutterBottom>
              Status Order
            </Typography>
            <Box marginY={4}>
              <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Stack gap={1}>
              <Typography fontWeight={700} variant="h6" gutterBottom>
                Detail Order
              </Typography>
              <Typography>Name: {detail?.name}</Typography>
              <Typography>
                Order Date:{" "}
                {detail?.orderDate && DateUtility.format(detail?.orderDate)}
              </Typography>
              <Typography>
                Delivery Date:{" "}
                {detail?.deliveryDate &&
                  DateUtility.format(detail?.deliveryDate)}
              </Typography>
              <Typography>
                Delivery Address: {detail?.deliveryAddress}
              </Typography>
              <Typography>Additional Notes: {detail?.specialNotes}</Typography>
              <Typography>
                Status:{" "}
                <Chip color="secondary" label={STATUS[detail?.status]} />
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
