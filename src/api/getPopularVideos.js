const KEY = require("../config.json").KEY;

export default async function getPopularVideos() {
  const videos = [];
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=${KEY}`
  );
  const resJson = await res.json();
  for (let item of resJson.items) {
    if (!item.snippet) continue; //sometimes one of the videos isn't available
    const obj = {
      id: item.id,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails,
    };
    videos.push(obj);
  }
  return videos;
}
