import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const textContStyle = {
  margin: "5px 5px",
};

const VideoListItem = ({
  id,
  setId,
  thumbnailUrl,
  title,
  channelName,
  publishDate,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="list-item-cont"
      onClick={() => {
        setId(id);
        navigate(`/video?id=${id}`);
      }}
    >
      {/*video thumbnail*/}
      <img src={thumbnailUrl} alt="thumbnail" />

      <div style={textContStyle}>
        {/*video title*/}
        <Typography variant="subtitle1" noWrap sx={{ color: "primary.light" }}>
          {formatTitle(title)}
        </Typography>
        {/* channel name*/}
        <Typography variant="overline" noWrap sx={{ color: "grey.600" }}>
          {channelName}
        </Typography>
        <br />
        {/*publish date*/}
        <Typography variant="overline" sx={{ color: "grey.600" }}>
          {publishDate}
        </Typography>
      </div>
    </div>
  );
};
/**
 * limits the title length to 3 chars and adds "..." in case of an overflow
 */
function formatTitle(title) {
  if (title.length <= 34) return title;
  return title.slice(0, 36) + "...";
}

export default VideoListItem;
