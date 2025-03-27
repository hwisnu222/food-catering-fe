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
      >
        {data?.categories?.map((item, index) => (
          <Card key={index} sx={{ width: 200 }}>
            <Box
              padding={3}
              flex={1}
              justifyContent="center"
              fullWidth
              className="capitalize font-medium"
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
          <Card sx={{ width: 270 }}>
            <CardMedia sx={{ height: 140 }} image={menu.image} title="menu" />
            <CardContent>
              <Stack gap={2}>
                <Link href={`/products/${menu.id}`} underline="none">
                  <Typography variant="h6">{menu.name}</Typography>
                </Link>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {menu.description}
                </Typography>
                <Typography
                  variant="h5"
                  className="font-extrabold"
                  fontWeight={500}
                >
                  {menu.basePrice}
                </Typography>
              </Stack>
            </CardContent>

            <CardActions fullWidth>
              <Button
                fullWidth
                variant="contained"
                startIcon={<ShoppingBagOutlined />}
              >
                Buy
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
