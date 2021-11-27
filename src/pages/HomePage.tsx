import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stories from "../layouts/Home/Stories";
import Box from "@mui/material/Box";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <Box>
      <AppBar color="transparent">
        <Toolbar sx={{ justifyContent: "space-between", paddingY: "8px" }}>
          <img src="./ig-logo.png" alt="ig-logo" />
          <Stack direction="row" sx={{ alignItems: "center" }}>
            <IconButton aria-label="new-post">
              <AddBoxOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="activity">
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="chat">
              <ChatOutlinedIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Stories />
    </Box>
  );
};

export default HomePage;
