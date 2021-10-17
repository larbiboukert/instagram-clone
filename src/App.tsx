import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function App() {
  const [activeNav, setActiveNav] = React.useState(0);

  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={activeNav}
          onChange={(event, newValue) => {
            setActiveNav(newValue);
          }}
        >
          <BottomNavigationAction icon={<HomeIcon />} />
          <BottomNavigationAction icon={<SearchIcon />} />
          <BottomNavigationAction icon={<OndemandVideoIcon />} />
          <BottomNavigationAction icon={<LocalMallIcon />} />
          <BottomNavigationAction icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

export default App;
