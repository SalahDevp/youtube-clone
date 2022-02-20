import { Grid } from "@mui/material";

import { useContext } from "react";
import VideoCard from "../components/VideoCard";
import { VideosContext } from "../App";
const Videos = () => {
  const [vids] = useContext(VideosContext);
  return (
    <Grid container spacing={2}>
      {vids.map((vid, ind) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <VideoCard
            key={ind}
            title={vid.title}
            thumbSrc={vid.thumbnail.medium.url}
            videoid={vid.id}
            publishedAt={vid.publishedAt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Videos;
