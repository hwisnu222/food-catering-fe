import React from "react";
import { ShoppingBagOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { currencyFormat } from "../../utils/currency";

export default function MenuCard({ menu }) {
  return (
    <Card className="md:w-[20vw] w-full">
      <CardMedia sx={{ height: 140 }} image={menu.image} title="menu" />
      <CardContent>
        <Stack gap={2}>
          <Link href={`/products/${menu.id}`} underline="none">
            <Typography variant="h6">{menu.name}</Typography>
          </Link>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {menu.description.slice(0, 25)}
          </Typography>
          <Typography variant="h5" className="font-extrabold" fontWeight={500}>
            {currencyFormat(menu.basePrice)}
          </Typography>
        </Stack>
      </CardContent>

      <CardActions fullWidth>
        <Button
          fullWidth
          variant="contained"
          startIcon={<ShoppingBagOutlined />}
          href={`/order/${menu.id}`}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
