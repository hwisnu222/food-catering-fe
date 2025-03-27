import { LocalMall } from "@mui/icons-material";
import { Button, IconButton, Stack, Typography, Link } from "@mui/material";
import React from "react";

const menu = [
  {
    anchor: "/",
    label: "home",
  },
  {
    anchor: "/products",
    label: "Menu",
  },
  {
    anchor: "/about",
    label: "about",
  },
];

export default function Header() {
  return (
    <Stack
      direction="row"
      padding={2}
      justifyContent="space-between"
      alignItems="center"
      className="sticky top-0 bg-white z-30"
    >
      <Link href="/#" underline="none">
        <Typography variant="h6" fontWeight={700}>
          Food Catering
        </Typography>
      </Link>
      <Stack gap={5} direction="row" justifyContent="start" alignItems="center">
        {menu.map((item, index) => (
          <Link href={item.anchor} key={index} underline="none">
            <Typography fontWeight={700} className="capitalize">
              {item.label}
            </Typography>
          </Link>
        ))}
      </Stack>
      <Stack direction="row" gap={2}>
        <Button variant="contained" size="small">
          Login
        </Button>
      </Stack>
    </Stack>
  );
}
