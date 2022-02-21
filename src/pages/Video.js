import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import fetchVideo from "../api/fetchVideo";
import search from "../api/search";
import VideoListItem from "../components/VideoListItem";

const Video = () => {
  const [embedHtml, setEmbedHtml] = useState("");
  const [title, setTitle] = useState("");
  const [views, setViews] = useState(0);
  const [published, setPublished] = useState("");
  const [recommendedVids, setRecVids] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    const queryString = window.location.search;
    const searchId = queryString.slice(queryString.search(/\?id=/) + 4);
    setId(searchId);
    fetchVideo(searchId).then((video) => {
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
    search(undefined, searchId).then((recommendedVids) => {
      setRecVids(recommendedVids);
    });
  }, [id]);
  return (
    <Grid container spacing={0}>
      <Grid item xs={8}>
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
      <Grid item xs={4}>
        <div className="rec-videos-list">
          {recommendedVids.map((video, ind) => (
            <VideoListItem
              key={ind}
              id={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnail.default.url}
              channelName={video.channelTitle}
              publishDate={video.publishedAt}
              setId={setId}
            />
          ))}
        </div>
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
