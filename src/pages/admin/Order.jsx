import { Container, Typography, Box } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../graphql/queries/orders.query";
import { DateUtility } from "../../utils/date";
import Modal from "../../components/modals/Modal";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
  },
  {
    field: "trackingCode",
    headerName: "Tracking Code",
    width: 150,
  },
  {
    field: "orderDate",
    headerName: "Order Date",
    width: 300,
    renderCell: ({ row }) => row.orderDate && DateUtility.format(row.orderDate),
  },
  {
    field: "deliveryDate",
    headerName: "Delivery Date",
    width: 300,
    renderCell: ({ row }) =>
      row.deliveryDate && DateUtility.format(row.deliveryDate),
  },

  {
    field: "",
    headerName: "",
    width: 150,
  },
];

export default function Order() {
  const { data } = useQuery(GET_ORDERS);

  return (
    <Container>
      <Typography fontWeight={700} variant="h5" marginY={3}>
        Orders
      </Typography>
      <Box height="80vh" marginBottom={4}>
        <DataGrid
          getRowId={(row) => row.id}
          columns={columns}
          rows={data?.orders || []}
        />
      </Box>
    </Container>
  );
}
