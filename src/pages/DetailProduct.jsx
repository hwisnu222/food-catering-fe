import {
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
import { GET_DETAIL_MENU } from "../graphql/queries/menu.query";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

export default function DetailProduct() {
  const { id } = useParams();

  const { data: dataDetail } = useQuery(GET_DETAIL_MENU, {
    variables: {
      id,
    },
  });

  const detail = dataDetail?.menuItem?.[0];

  console.log(dataDetail);

  return (
    <Container marginTop={4}>
      <Card sx={{ width: "100%" }}>
        <CardMedia sx={{ height: 140 }} image={detail?.image} title="menu" />
        <CardContent>
          <Stack gap={2}>
            <Link href="/products/54" underline="none">
              <Typography variant="h6">{detail?.name}</Typography>
            </Link>
            <Typography
              variant="h5"
              className="font-extrabold"
              fontWeight={500}
            >
              {detail?.basePrice}
            </Typography>
            <Typography fontWeight={700}>Description</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {detail?.description}
            </Typography>
            <Typography fontWeight={700}>Preparation Time</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {detail?.preparationTime} Minutes
            </Typography>
            <Typography fontWeight={700}>Dietary Type</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {detail?.dietaryType}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
