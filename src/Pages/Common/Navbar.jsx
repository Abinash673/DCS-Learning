import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Badge,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/logo.jpg";

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ height: "90px", justifyContent: "center", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: 70 }} />
        </Box>

        {/* Navigation Links */}
        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>Home</Button>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>Books</Button>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>Mock Test</Button>
            <Button color="inherit" sx={{ fontWeight: "bold" }}>Courses</Button>
          </Box>
        )}

        {/* Cart & Login */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="error">
                <ShoppingBagIcon />
              </Badge>
            </IconButton>
            <Button
              startIcon={<AccountCircleIcon />}
              sx={{ color: "#BA1616", fontWeight: "bold", textTransform: "none" }}
            >
              Log In
            </Button>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Books" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Mock Test" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button onClick={toggleDrawer(false)}>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="error">
                <ShoppingBagIcon />
              </Badge>
            </IconButton>
            <Button
              startIcon={<AccountCircleIcon />}
              sx={{ color: "#BA1616", fontWeight: "bold", textTransform: "none" }}
            >
              Log In
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
