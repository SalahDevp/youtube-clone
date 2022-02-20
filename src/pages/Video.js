import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchVideo from "../api/fetchVideo";
import VideoListTile from "../components/VideoListTile";

const Video = ({ recommendedIds }) => {
  const [embedHtml, setEmbedHtml] = useState("");
  const [title, setTitle] = useState("");
  const [views, setViews] = useState(0);
  const [published, setPublished] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const id = queryString.slice(queryString.search(/\?id=/) + 4);
    fetchVideo(id).then((video) => {
      setEmbedHtml(video.embedHtml);
      setTitle(video.title);
      setViews(video.views);
      setPublished(
        new Date(video.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      );
    });
  }, []);
  return (
    <Grid container spacing={10}>
      <Grid item>
        <div className="video-cont" style={{ height: window.innerHeight - 90 }}>
          <div
            className="player-cont"
            dangerouslySetInnerHTML={{ __html: embedHtml }}
          />
          <div className="video-info">
            <Typography variant="h5" sx={{ color: "primary.light" }}>
              {title}
            </Typography>
            <Typography variant="overline" sx={{ color: "grey.600" }}>
              {formatViews(views)} views • {published}
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item>
        <VideoListTile />
      </Grid>
    </Grid>
  );
};

/**
 *
 * adds "," every three digits
 */
function formatViews(views) {
  const charsArray = [];
  let counter = 0;
  for (let i = views.length - 1; i >= 0; i--) {
    if (counter === 3) {
      charsArray.unshift(views[i], ",");
      counter = 1;
    } else {
      charsArray.unshift(views[i]);
      counter++;
    }
  }
  return charsArray.join("");
}

export default Video;
