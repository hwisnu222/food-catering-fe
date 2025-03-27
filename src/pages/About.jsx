import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Button,
  useTheme,
} from "@mui/material";
import {
  Restaurant,
  LocalDining,
  Event,
  Stars,
  EmojiEvents,
  Phone,
} from "@mui/icons-material";

export default function About() {
  const theme = useTheme();
  return (
    <Box sx={{ py: 8, bgcolor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
            }}
          >
            About Food Catering
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: "auto",
            }}
          >
            Where Culinary Excellence Meets Unforgettable Moments
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              At <strong>Food Catering</strong>, we don't just serve meals—we
              craft experiences. With a passion for flavor and a commitment to
              quality, we specialize in bringing exceptional catering solutions
              to your most cherished events, from intimate gatherings to grand
              celebrations.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ mt: 4, fontWeight: 600 }}
            >
              Why Choose Food Catering?
            </Typography>

            <List>
              {[
                {
                  icon: <Restaurant color="primary" />,
                  text: "Customized Menus – Whether you crave gourmet dishes, local favorites, or dietary-specific meals",
                },
                {
                  icon: <LocalDining color="primary" />,
                  text: "Fresh & Premium Ingredients – We source only the freshest, high-quality ingredients",
                },
                {
                  icon: <Event color="primary" />,
                  text: "Stress-Free Service – From setup to cleanup, our professional team handles every detail",
                },
                {
                  icon: <Stars color="primary" />,
                  text: "Diverse Offerings – Buffets, plated dinners, boxed meals, or food stations",
                },
              ].map((item, index) => (
                <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                  <ListItemIcon sx={{ minWidth: 40, pt: 0.5 }}>
                    {item.icon}
                  </ListItemIcon>
                  <Typography variant="body1">{item.text}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  Our Story
                </Typography>
                <Typography variant="body2" paragraph>
                  Founded in 2010, Food Catering began with a simple mission: to
                  elevate events through outstanding food and impeccable
                  service. Today, we're proud to be a trusted name in Jakarta,
                  known for our creativity, reliability, and warm hospitality.
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <EmojiEvents color="secondary" sx={{ mr: 1 }} />
                  <Typography variant="body2">
                    Voted "Best Wedding Caterer 2023" by Foodie Magazine
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  Let's Create Something Delicious
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  startIcon={<Phone />}
                  sx={{ mt: 2 }}
                >
                  Contact Us Today
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: theme.palette.primary.light,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontStyle: "italic", mb: 2 }}>
            "Food is art, and every event is our canvas."
          </Typography>
          <Typography variant="subtitle1">
            – Chef Andi, Head Culinary Director
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
