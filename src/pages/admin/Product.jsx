import {
  Container,
  Typography,
  Box,
  Button,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useMutation, useQuery } from "@apollo/client";
import { GET_MENU } from "../../graphql/queries/menu.query";
import Modal from "../../components/modals/Modal";
import { Add } from "@mui/icons-material";
import { GET_CATEGORIES } from "../../graphql/queries/category.query";
import { dietType } from "../../constants/dietType.constant";
import { ADD_MENU } from "../../graphql/mutations/menu.mutation";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "description",
    headerName: "Description",
    width: 400,
  },
  {
    field: "basePrice",
    headerName: "Price",
    width: 300,
  },
  {
    field: "preparationTime",
    headerName: "Preparation Time",
    width: 200,
  },
  {
    field: "isAvailable",
    headerName: "Status",
    width: 200,
    renderCell: ({ row }) => (row.isAvailable ? "Active" : "Inactive"),
  },
];

const INITIAL_STATE = {
  name: "",
  description: "",
  categoryId: "",
  basePrice: "",
  dietaryType: "",
  preparationTime: "",
  image: null,
  isAvailable: true,
};

export default function ProductList() {
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState(INITIAL_STATE);

  const { data, loading, error, refetch } = useQuery(GET_MENU);
  const { data: categories } = useQuery(GET_CATEGORIES);
  const [addMenu] = useMutation(ADD_MENU, {
    onCompleted: () => {
      refetch();
      setModal(false);
      setForm(INITIAL_STATE);
    },
  });

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const handleChangeForm = (event) => {
    const target = event.target;

    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = () => {
    const body = {
      name: form.name,
      description: form.description,
      categoryId: Number(form.categoryId),
      basePrice: Number(form.basePrice),
      dietaryType: form.dietaryType,
      preparationTime: Number(form.preparationTime),
      image: form.image,
      isAvailable: true,
    };

    addMenu({
      variables: {
        data: body,
      },
    });
  };

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={700} variant="h5" marginY={3}>
          Menu
        </Typography>
        <Button variant="contained" onClick={handleModal} startIcon={<Add />}>
          New Menu
        </Button>
      </Stack>
      <Box height="80vh" marginBottom={4}>
        <DataGrid
          getRowId={(row) => row.id}
          columns={columns}
          rows={data?.menuItems || []}
          loading={loading}
          error={error}
        />
      </Box>
      <Modal
        title="New Menu"
        open={modal}
        onClose={handleModal}
        onSubmit={handleSubmit}
      >
        <Stack gap={2} width="70vw" height="60vh" sx={{ overflowY: "auto" }}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChangeForm}
          />
          <TextField
            label="Description"
            name="description"
            value={form.description}
            multiline
            rows={5}
            onChange={handleChangeForm}
          />
          <TextField
            label="Price"
            name="basePrice"
            onChange={handleChangeForm}
          />
          <Stack direction="row" gap={2}>
            <FormControl fullWidth>
              <InputLabel id="category">Category</InputLabel>
              <Select
                label="Category"
                name="categoryId"
                value={form.categoryId}
                onChange={handleChangeForm}
              >
                {categories?.categories.map((category, index) => (
                  <MenuItem value={category.id} key={index}>
                    {category.name}
                    {category.id}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="category">Diet Type</InputLabel>
              <Select
                label="Diet Type"
                name="dietaryType"
                value={form.dietaryType}
                onChange={handleChangeForm}
              >
                {Object.keys(dietType).map((type, index) => (
                  <MenuItem value={type} key={index}>
                    {dietType[type]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <TextField
            label="Preparation Time"
            type="number"
            name="preparationTime"
            value={form.preparationTime}
            onChange={handleChangeForm}
          />
          <TextField
            label="Image"
            name="image"
            value={form.image}
            onChange={handleChangeForm}
          />
        </Stack>
      </Modal>
    </Container>
  );
}
