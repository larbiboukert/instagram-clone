import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ReelsPage from "./pages/ReelsPage";
import ShopPage from "./pages/ShopPage";
import ProfilePage from "./pages/ProfilePage";
import Box from "@mui/system/Box";

function App() {
  const location = useLocation();
  const history = useHistory();

  return (
    <Box>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/reels">
          <ReelsPage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={location?.pathname}
          onChange={(e, value) => history.push(value)}
        >
          <BottomNavigationAction icon={<HomeIcon />} value="/" />
          <BottomNavigationAction icon={<SearchIcon />} value="/search" />
          <BottomNavigationAction icon={<OndemandVideoIcon />} value="/reels" />
          <BottomNavigationAction icon={<LocalMallIcon />} value="/shop" />
          <BottomNavigationAction icon={<FavoriteIcon />} value="/profile" />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;
