import {
  Avatar,
  Card,
  CardMedia,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ thumbSrc, title, videoid, publishedAt }) => {
  const navigate = useNavigate();
  publishedAt = formatPublishedDate(publishedAt);
  return (
    <Card
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/video?id=${videoid}`)}
    >
      <CardMedia component="img" src={thumbSrc} height="180px" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>H</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={`Published ${publishedAt} ago`}
        />
      </ListItem>
    </Card>
  );
};

function formatPublishedDate(isoString) {
  const publishedDate = new Date(isoString);

  const diffMs = Date.now() - publishedDate;
  let tmp = Math.floor(diffMs / (1000 * 60 * 60)); //conv to hours
  if (tmp <= 23) return `${tmp} hour${tmp === 1 ? "" : "s"}`;
  tmp = Math.floor(tmp / 24); //conv to days
  if (tmp <= 29) return `${tmp} day${tmp === 1 ? "" : "s"}`;
  tmp = Math.floor(tmp / 30); //conv to months
  if (tmp <= 11) return `${tmp} month${tmp === 1 ? "" : "s"}`;
  tmp = Math.floor(tmp / 12); //conv to years
  return `${tmp} year${tmp === 1 ? "" : "s"}`;
}

export default VideoCard;
