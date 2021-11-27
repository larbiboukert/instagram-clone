import Avatar from "@mui/material/Avatar";
import Box from "@mui/system/Box";
import React from "react";

interface Props {}

const Stories = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {[
        Array(10)
          .fill("")
          .map((e, k) => (
            <Avatar alt="Remy Sharp" src={`/static/images/user${k % 4}.jpg`} />
          )),
      ]}
    </Box>
  );
};

export default Stories;
