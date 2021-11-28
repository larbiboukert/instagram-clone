import Avatar from "@mui/material/Avatar";
import Box from "@mui/system/Box";
import React from "react";

interface Props {}

const Stories = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "80px",
      }}
    >
      {[
        Array(10)
          .fill("")
          .map((e, k) => (
            <Avatar
              alt="Remy Sharp"
              src={`/static/images/user${k % 4}.jpg`}
              sx={{ width: "64px", height: "64px", marginX: "8px" }}
            />
          )),
      ]}
    </Box>
  );
};

export default Stories;
