import React from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <AppBar color="transparent">
      <Toolbar sx={{ justifyContent: "space-between", paddingY: "8px" }}>
        <img src="./ig-logo.png" />
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
  );
};

export default HomePage;