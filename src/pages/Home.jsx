import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/headers/Header";
import { ArrowForward } from "@mui/icons-material";
import { GET_MENU } from "../graphql/queries/menu.query";
import { useQuery } from "@apollo/client";
import MenuCard from "../components/cards/MenuCard";

export default function Home() {
  const { data: dataMenu } = useQuery(GET_MENU);
  return (
    <Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        className="text-white relative"
        gap={1}
        minHeight="80vh"
        sx={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <Box className="bg-[#00000090] absolute top-0 left-0 w-full h-full"></Box>
        <Stack
          gap={2}
          justifyContent="center"
          alignItems="center"
          className="z-20"
        >
          <Typography variant="h1" fontSize="4rem" fontWeight={700}>
            Food Catering
          </Typography>
          <Typography>
            Make Your Event Unforgettable with Delectable Dishes Prepared by
            Expert Chefs
          </Typography>
          <Button variant="contained" size="large">
            Order Now
          </Button>
        </Stack>
      </Stack>
      <Container>
        <Box minHeight="100vh">
          <Stack marginTop={3}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              marginBottom={2}
            >
              <Typography fontWeight={700} variant="h6">
                Menu
              </Typography>
              <Button href="/products" endIcon={<ArrowForward />}>
                All Menu
              </Button>
            </Stack>
            <Stack
              direction="row"
              gap={2}
              flexWrap="wrap"
              justifyContent="space-between"
            >
              {dataMenu?.menuItems.slice(0, 4).map((menu, index) => (
                <MenuCard menu={menu} key={index} />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
}
