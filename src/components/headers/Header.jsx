import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Stack,
  Typography,
  Link,
  AppBar,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

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
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer((prev) => !prev);
  };
  return (
    <>
      <Box className="hidden md:block">
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
          <Stack
            gap={5}
            direction="row"
            justifyContent="start"
            alignItems="center"
          >
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
      </Box>
      <Box sx={{ flexGrow: 1 }} className="block md:hidden sticky top-0 z-50">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawer}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Food Catering
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        <Drawer open={drawer} onClose={handleDrawer}>
          <Box width="70vw">
            <List>
              <ListItem>
                <ListItemButton component="a" href="/">
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component="a" href="/products">
                  <ListItemText primary="Menu" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component="a" href="/about">
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
