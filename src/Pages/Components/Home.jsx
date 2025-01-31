import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import hero from "../../assets/hero.jpg";
import { products, testimonials, socialLinks, images } from "../../Data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F5EEEF",
          pb: isMobile ? 10 : 25,
          height: isMobile ? "auto" : "78vh",
          textAlign: "center",
          p: isMobile ? 3 : 0,
        }}
      >
        <Box sx={{ m: isMobile ? 2 : 5 }}>
          <Typography variant={isMobile ? "h4" : "h2"} sx={{ fontWeight: "bold" }}>
            India's Best <br /> Online Platform For
            <Typography
              component="span"
              variant={isMobile ? "h4" : "h2"}
              sx={{ color: "#B41C26", fontWeight: "bold" }}
            >
              {" "}RIE CEE
            </Typography>
          </Typography>
        </Box>
        <Box
          component="img"
          src={hero}
          alt="Illustration"
          sx={{
            width: isMobile ? "90%" : "500px",
            height: "auto",
            mx: "auto",
          }}
        />
      </Box>
      
      {/* Image Slider */}
      <Box
        sx={{
          width: isMobile ? "90%" : "1270px",
          height: "210px",
          borderRadius: "25px",
          margin: "0 auto",
          mt: "-100px",
          overflow: "hidden",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          style={{ borderRadius: "25px" }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={src}
                alt={`Slide ${index + 1}`}
                sx={{ width: "100%", height: "200px", borderRadius: "25px", objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      
      {/* Product Section */}
      <Box sx={{ textAlign: "left", mt: 10, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, ml: 2 }}>
          Explore by <span style={{ color: "#B41C26" }}>Products</span>
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ maxWidth: 300, margin: "0 auto", textAlign: "center" }}>
                <CardMedia component="img" height="140" image={product.img} alt={product.title} sx={{ objectFit: "contain", mt: 2 }} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Testimonials Section */}
      <Box sx={{ textAlign: "left", p: 3, mt: 5 }}>
        <Typography variant="h4" fontWeight="bold">
          Our Selected <Typography component="span" color="red" variant="h4" fontWeight="bold">Students</Typography>
        </Typography>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={isMobile ? 1 : 2}
          autoplay={{ delay: 3000 }}
          style={{ padding: "20px 0" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 3, textAlign: "left" }}>
                <Typography>{testimonial.text}</Typography>
                <Typography fontWeight="bold" mt={2}>{testimonial.name}</Typography>
                <Typography variant="body2" color="gray">{testimonial.course}</Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button variant="contained" sx={{ textAlign: "center", backgroundColor: "red", color: "white", mt: 3, borderRadius: 20 }}>See more</Button>
      </Box>
    </Box>
  );
};

export default Home;
