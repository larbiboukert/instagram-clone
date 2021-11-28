import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ReelsPage from "./pages/ReelsPage";
import ShopPage from "./pages/ShopPage";
import ProfilePage from "./pages/ProfilePage";
import Box from "@mui/system/Box";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={8}
      >
        <BottomNavigation
          showLabels
          value={location?.pathname}
          onChange={(e, value) => navigate(value)}
        >
          <BottomNavigationAction icon={<HomeIcon />} value="/" />
          <BottomNavigationAction icon={<SearchIcon />} value="/search" />
          <BottomNavigationAction icon={<OndemandVideoIcon />} value="/reels" />
          <BottomNavigationAction
            icon={<LocalMallOutlinedIcon />}
            value="/shop"
          />
          <BottomNavigationAction icon={<FavoriteIcon />} value="/profile" />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;
