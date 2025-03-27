import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box padding={2} gap={2} marginTop={4} justifyContent="space-between">
      <Stack flex={1} justifyContent="center" alignItems="center">
        <Typography fontWeight={700} variant="h6">
          Food Catering
        </Typography>
        <Typography className="text-gray-500">
          Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
        </Typography>
        <Typography>0873827xxxx</Typography>
      </Stack>
      {/* <Stack flex={1}>
        <Typography fontWeight={700} gutterBottom>
          Menu
        </Typography>
        <ul className="ml-2">
          <li>
            <Link href="/" underline="none">
              <Typography>Home</Typography>
            </Link>
          </li>
          <li>
            <Link href="/products" underline="none">
              <Typography>Menu</Typography>
            </Link>
          </li>
        </ul>
      </Stack>
      <Box flex={1}></Box> */}
    </Box>
  );
}
