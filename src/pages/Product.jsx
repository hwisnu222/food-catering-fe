import { useQuery } from "@apollo/client";
import { ShoppingBagOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { GET_CATEGORIES } from "../graphql/queries/category.query";
import { GET_MENU } from "../graphql/queries/menu.query";
import MenuCard from "../components/cards/MenuCard";

export default function Product() {
  const { data } = useQuery(GET_CATEGORIES);

  const { data: dataMenu } = useQuery(GET_MENU);

  return (
    <Container>
      <Typography variant="h6" marginY={2}>
        Category
      </Typography>
      <Stack
        direction="row"
        gap={2}
        marginY={2}
        marginBottom={6}
        flexWrap="wrap"
        paddingY={2}
      >
        {data?.categories?.map((item, index) => (
          <Card key={index}>
            <Box
              padding={3}
              flex={1}
              justifyContent="center"
              fullWidth
              className="capitalize font-medium"
              sx={{ width: 200 }}
            >
              {item.name}
            </Box>
          </Card>
        ))}
      </Stack>
      <Typography variant="h6" marginY={2}>
        Menu
      </Typography>
      <Stack
        direction="row"
        gap={2}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {dataMenu?.menuItems.map((menu, index) => (
          <MenuCard menu={menu} key={index} />
        ))}
      </Stack>
    </Container>
  );
}
