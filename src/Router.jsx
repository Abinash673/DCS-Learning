import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Pages/Common/Navbar";
import Footer from "./Pages/Common/Footer";
import Home from "./Pages/Components/Home";

function App() {
  return (
    <Router>
      <Box sx={{margin: 0, padding: 0 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
