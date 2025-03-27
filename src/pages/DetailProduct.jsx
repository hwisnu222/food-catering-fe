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
import { currencyFormat } from "../utils/currency";
import { dietType } from "../constants/dietType.constant";

export default function DetailProduct() {
  const { id } = useParams();

  const { data: dataDetail } = useQuery(GET_DETAIL_MENU, {
    variables: {
      id,
    },
  });

  const detail = dataDetail?.menuItem?.[0];

  return (
    <Container marginTop={4}>
      <Card sx={{ width: "100%" }}>
        <CardMedia sx={{ height: 200 }} image={detail?.image} title="menu" />
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
              {currencyFormat(detail?.basePrice || 0)}
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
              {dietType[detail?.dietaryType]}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
