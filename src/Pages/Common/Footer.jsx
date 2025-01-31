import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "white",
        padding: isMobile ? "20px" : "20px 40px",
      }}
    >
      <Grid container spacing={2} justifyContent="center">

        <Grid xs={12} sm={3} textAlign={isMobile ? "center" : "left"}>
          <Typography variant="h6" sx={{ color: "#ff0000", marginBottom: 1 }}>
            DCS Learning
          </Typography>
          
        </Grid>
        {/* Company Section */}
        <Grid item xs={12} sm={3} textAlign={isMobile ? "center" : "left"}>
          <Typography variant="h6" sx={{ color: "#ff0000", marginBottom: 1 }}>
            Company
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Contact us
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Privacy policy
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Terms & conditions
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Shipping/Delivery
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Refund & cancellation
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Disclaimer
            </Link>
          </Typography>
        </Grid>

        {/* Products Section */}
        <Grid item xs={12} sm={3} textAlign={isMobile ? "center" : "left"}>
          <Typography variant="h6" sx={{ color: "#ff0000", marginBottom: 1 }}>
            Products
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Live Courses
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Video Courses
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Mock Tests
            </Link>
          </Typography>
          <Typography>
            <Link href="#" color="inherit" underline="hover">
              Books
            </Link>
          </Typography>
        </Grid>

        {/* Get in Touch Section */}
        <Grid item xs={12} sm={3} textAlign={isMobile ? "center" : "left"}>
          <Typography variant="h6" sx={{ color: "#ff0000", marginBottom: 1 }}>
            Get in touch
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "start",
              gap: 2,
            }}
          >
            <IconButton href="#" sx={{ color: "#fff" }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: "#fff" }}>
              <TelegramIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Typography
        variant="body2"
        sx={{ textAlign: "center", marginTop: 3, color: "#999" }}
      >
        ©2024 DCS. All rights reserved
      </Typography>
    </Box>
  );
}
