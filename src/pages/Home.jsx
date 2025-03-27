import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Icon,
} from "@mui/material";
import React from "react";
import Header from "../components/headers/Header";
import {
  ArrowForward,
  Business,
  Cake,
  MenuBook,
  Star,
  PersonAdd,
} from "@mui/icons-material";
import { GET_MENU } from "../graphql/queries/menu.query";
import { useQuery } from "@apollo/client";
import MenuCard from "../components/cards/MenuCard";
import json from "../data/landing.json";

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
          <Typography
            variant="h1"
            fontSize="3rem"
            fontWeight={700}
            textAlign="center"
          >
            Welcome to Food Catering
          </Typography>
          <Typography textAlign="center" width="70vw">
            Your go-to solution for delicious, high-quality catering services
            tailored to your event. From intimate gatherings to grand
            celebrations, we provide an exceptional culinary experience that
            will leave your guests talking.
          </Typography>
          <Button variant="contained" size="large" href="/products">
            Order Now
          </Button>
        </Stack>
      </Stack>
      <Container>
        <Stack alignItems="center" spacing={15} sx={{ padding: "4rem 0" }}>
          <Stack alignItems="center" spacing={3}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Business sx={{ marginRight: 1 }} /> Our Services
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              sx={{ maxWidth: "800px" }}
            >
              No matter the occasion, we’ve got you covered with our wide range
              of catering services. Choose the option that fits your event
              perfectly:
            </Typography>
            <Grid
              container
              gap={3}
              sx={{ marginTop: 3 }}
              justifyContent="center"
            >
              {json.services.map((service, index) => (
                <Grid item md={5} xs={12} key={index}>
                  <Paper
                    elevation={3}
                    sx={{ padding: 3, textAlign: "center", borderRadius: 2 }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ textTransform: "capitalize", marginBottom: 1 }}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {service.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Stack alignItems="center" spacing={3} marginBottom={4}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <MenuBook sx={{ marginRight: 1 }} /> Our Menu
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              sx={{ maxWidth: "800px" }}
            >
              Explore our diverse and mouth-watering menu options. We offer a
              wide selection of dishes to satisfy every taste and dietary
              preference:
            </Typography>

            <Box>
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
          </Stack>

          <Stack alignItems="center" spacing={3}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Star sx={{ marginRight: 1 }} /> Why Choose Us?
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              sx={{ maxWidth: "800px" }}
            >
              We pride ourselves on offering not only great food but an
              experience your guests will love. Here’s why you should choose us:
            </Typography>
            <Grid
              container
              gap={3}
              sx={{ marginTop: 3 }}
              justifyContent="center"
            >
              {json.features.map((feature, index) => (
                <Grid item md={5} xs={12} key={index}>
                  <Paper
                    elevation={3}
                    sx={{ padding: 3, textAlign: "center", borderRadius: 2 }}
                  >
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ textTransform: "capitalize", marginBottom: 1 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Stack alignItems="center" spacing={3}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <PersonAdd sx={{ marginRight: 1 }} /> Client Testimonials
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              sx={{ maxWidth: "800px" }}
            >
              Don't just take our word for it – here’s what our happy clients
              have to say:
            </Typography>
            <Grid
              container
              gap={3}
              sx={{ marginTop: 3 }}
              justifyContent="center"
            >
              {json.testimonials.map((testimonial, index) => (
                <Grid item md={5} xs={12} key={index}>
                  <Paper
                    elevation={3}
                    sx={{ padding: 3, textAlign: "center", borderRadius: 2 }}
                  >
                    <Typography
                      variant="body1"
                      fontStyle="italic"
                      color="textSecondary"
                      sx={{ marginBottom: 1 }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Typography variant="body2" fontWeight={700}>
                      - {testimonial.author}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>
      <Stack alignItems="center" spacing={3} paddingY={10}>
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <PersonAdd sx={{ marginRight: 1 }} /> Get a Quote
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          sx={{ maxWidth: "800px" }}
        >
          Ready to plan your next event? Let us provide you with a customized
          catering quote. Fill out the form below, and our team will get back to
          you with all the details.
        </Typography>
      </Stack>
    </Stack>
  );
}
