import { Typography } from "@mui/material";
import React from "react";

const VideoListTile = ({ thumbnail }) => {
  return (
    <div className="list-tile-cont">
      <img
        src="https://i.ytimg.com/vi/eIho2S0ZahI/default.jpg"
        alt="thumbnail"
      />
      <div>
        <Typography variant="h6" sx={{ color: "primary.light" }}>
          video title
        </Typography>
        <Typography variant="overline" sx={{ color: "grey.600" }}>
          channel name
        </Typography>{" "}
        <br />
        <Typography variant="overline" sx={{ color: "grey.600" }}>
          published 2 years ago
        </Typography>
      </div>
    </div>
  );
};

export default VideoListTile;
